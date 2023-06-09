import { compare } from "bcrypt"
import { prisma } from "../../services/database"
import { sign } from "jsonwebtoken"

interface IAuthenticateAdmin {
    email: string
    password: string
}

export class AuthenticateAdminUseCase {
    async execute({ email, password }: IAuthenticateAdmin) {
        const admin = await prisma.admin.findFirst({
            where: {
                email
            }
        })

        if (!admin) {
            throw new Error("Username or password invalid!")
        }

        // Verificar se senha corresponde ao username
        const passwordMatch = await compare(password, admin.password)

        if (!passwordMatch) {
            throw new Error("Username or password invalid!")
        }

        // Gerar o token
        const token = sign({ id: admin.id }, "13474f3ed4aa1d5671be1267e2c57753", {
            expiresIn: "1d"
        })

        const { id } = admin

        return { admin: { id, email }, token }

    }
}