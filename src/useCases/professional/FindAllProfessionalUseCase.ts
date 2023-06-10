import { response } from "express"
import { prisma } from "../../services/database"

export class FindAllProfessionalUseCase {
    async execute() {
        const professionals = await prisma.professional.findMany({
            where: {},
            include: {
                services: true,
                Schedule: true,
            },
        })

        return professionals
    }
}
