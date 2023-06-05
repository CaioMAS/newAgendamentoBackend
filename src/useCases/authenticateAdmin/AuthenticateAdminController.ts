import { Request, Response } from "express";
import { AuthenticateAdminUseCase } from "./AuthenticateAdminUseCase";

export class AuthenticateAdminController {
    async handle (request: Request, response: Response) {
        const {email, password} = request.body

        const authenticateAdminUseCase = new AuthenticateAdminUseCase()
        const result = await authenticateAdminUseCase.execute({
            email,
            password
        })

        return response.json(result)
    }
}