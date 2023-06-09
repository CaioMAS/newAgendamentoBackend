import { hash } from "bcrypt";
import { prisma } from "../../services/database";

interface ICreateAdmin {
    email: string,
    password: string
    name: string
}

export class CreateAdminUseCase {
    async execute({email, password, name }: ICreateAdmin) {
        const adminExist = await prisma.admin.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive"
                }
            }
        })

        if(adminExist) {
            throw new Error("Admin already exists")
        }

        const hashPassword = await hash (password, 10)

        const admin = await prisma.admin.create({
            data: {
                email,               
                password: hashPassword,
                name
                
            }
        })

        return admin
    }   
    
}