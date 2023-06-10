import { Request, Response } from "express"
import { AuthenticateAdminUseCase } from "./AuthenticateAdminUseCase"

export class AuthenticateAdminController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body

        const authenticateAdminUseCase = new AuthenticateAdminUseCase()

        try {
            const result = await authenticateAdminUseCase.execute({
                email,
                password,
            })

            return response.json(result)
        } catch (error) {
            return response.status(401).json({ error: error.message })
        }
    }
}
