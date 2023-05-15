import { prisma } from "../../services/database";

interface ICreateProfessional {
    professional_name: string,
    services: string[],
    photo: string   
}

export class CreateProfessionalUseCase {
    async execute({services, professional_name, photo}: ICreateProfessional) {
        const professional = await prisma.professional.create({
            data: {
                professional_name,                
                photo,
                services: services.join(", ")
            }
        })

        return professional
    }
}