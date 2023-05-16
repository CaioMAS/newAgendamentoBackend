import { Request, Response } from "express";
import { FindAllAdminUseCase } from "./FindAllAdminUseCase";


export class FindAllAdminController {
    async handle (request: Request, response: Response) {
        const findAllAdminUseCase = new FindAllAdminUseCase()

        const admins = await findAllAdminUseCase.execute()

        return response.json(admins)
    }
}