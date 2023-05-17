import { prisma } from "../../services/database";

interface ICreateProfessional {
    professional_name: string,    
    photo: string,
    adminId: string 
}

export class CreateProfessionalUseCase {
    async execute({professional_name, photo, adminId}: ICreateProfessional) {
        const professional = await prisma.professional.create({
            data: {
                professional_name,                
                photo,                
                adminId
            }
        })

        return professional
    }
}