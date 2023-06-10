import { prisma } from "../../services/database"

export class FindAdminIdUseCase {
    async execute(id: string) {
        const admin = await prisma.admin.findUnique({
            where: {
                id: id,
            },
            include: {
                Professional: {
                    include: {
                        services: true,
                        Schedule: true,
                    },
                },
            },
        })

        return admin.Professional.map(professional => {
            return {
                id: professional.id,
                professional_name: professional.professional_name,
                photo: professional.photo,
                adminId: professional.adminId,
                services: professional.services.map(service => {
                    return {
                        id: service.id,
                        type: service.type,
                        value: service.value,
                        professionalId: service.professionalId,
                    }
                }),
                Schedule: professional.Schedule,
            }
        })
    }
}
