import { Request, Response } from "express";
import { CreateScheduleUseCase } from "./CreateScheduleUseCase";


export class CreateScheduleController {
    async handle (request: Request, response: Response) {
        const {professionalId} = request
        const {service, date, time, client_name, client_telephone} = request.body

        const createScheduleUseCase = new CreateScheduleUseCase()
        const schedule = await createScheduleUseCase.execute({
            client_name,
            client_telephone,
            date,
            service,
            time
        })

        return response.json(schedule)
    }
}