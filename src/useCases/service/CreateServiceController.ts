import { Request, Response } from "express";
import { CreateServiceUseCase } from "./CreateServiceUseCase";




export class CreateServiceController {
    async handle (request: Request, response: Response) {
        const {professionalId, type, value} = request.body

        const createServiceUseCase = new CreateServiceUseCase()
        const service = await createServiceUseCase.execute({
            professionalId,
            type,
            value
        })

        return response.json(service)
    }
}