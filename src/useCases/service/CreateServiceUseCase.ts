import { prisma } from "../../services/database"


interface ICreateServices {
    type: string,
    value: number,
    professionalId: string
}

export class CreateServiceUseCase {
    async execute ({professionalId, type, value}: ICreateServices) {
        const service = await prisma.service.create({
            data: {
                type,
                value,
                professionalId
            }
        })

        return service
    }
}