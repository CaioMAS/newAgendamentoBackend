import { Request, Response } from "express";
import { CreateAdminUseCase } from "./CreateAdminUseCase";


export class CreateAdminController {
    async handle(request: Request, response: Response) {

        const {email, password} = request.body

        const createAdminUseCase = new CreateAdminUseCase()
        const result = await createAdminUseCase.execute({
            email,
            password
        })

        return response.json(result)
    }
}