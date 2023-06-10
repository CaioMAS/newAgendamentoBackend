import { prisma } from "../../services/database"

export class FindAllAdminUseCase {
    async execute() {
        const admins = await prisma.admin.findMany({
            include: {
                Professional: true,
            },
        })

        // Mapear os resultados e selecionar apenas os campos desejados
        const filteredAdmins = admins.map(admin => {
            const { password, ...adminData } = admin
            return adminData
        })

        return filteredAdmins
    }
}
