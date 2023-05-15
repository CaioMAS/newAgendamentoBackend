import { Request, Response } from "express";
import { CreateProfessionalUseCase } from "./CreateProfessionalUseCase";




export class CreateProfessionalController {
    async handle (request: Request, response: Response) {
        const {adminId} = request
        const {professional_name, photo, services} = request.body

        const createProfessionalUseCase = new CreateProfessionalUseCase()
        const professional = await createProfessionalUseCase.execute({
            professional_name,
            services,
            photo
        })

        return response.json(professional)
    }
}