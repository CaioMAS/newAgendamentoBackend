import { Request, Response } from "express"
import { FindAdminIdUseCase } from "./FindAdminIdUseCase"

export class FindAdminIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const findAdminIdUseCase = new FindAdminIdUseCase()

        const admin = await findAdminIdUseCase.execute(id)

        return response.json(admin)
    }
}
