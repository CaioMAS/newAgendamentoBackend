import { Request, Response } from "express";
import { CreateProfessionalUseCase } from "./CreateProfessionalUseCase";


export class CreateProfessionalController {
    async handle (request: Request, response: Response) {
        
        const {professional_name, photo, services, adminId} = request.body

        const createProfessionalUseCase = new CreateProfessionalUseCase()
        const professional = await createProfessionalUseCase.execute({
            professional_name,
            services,
            photo,
            adminId
        })

        return response.json(professional)
    }
}