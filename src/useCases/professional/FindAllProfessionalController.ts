import { Request, Response } from "express";
import { FindAllProfessionalUseCase } from "./FindAllProfessionalUseCase";



export class FindAllProfessinalController {
    async handle (request: Request, response: Response) {
        const findAllProfessionalUseCase = new FindAllProfessionalUseCase()

        const professinals = await findAllProfessionalUseCase.execute()

        return response.json(professinals)
    }
}