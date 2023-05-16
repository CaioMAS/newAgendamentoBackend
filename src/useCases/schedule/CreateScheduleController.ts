import { Request, Response } from "express";
import { CreateScheduleUseCase } from "./CreateScheduleUseCase";


export class CreateScheduleController {
    async handle (request: Request, response: Response) {        
        const {service, date, time, client_name, client_telephone, professional_id} = request.body

        const createScheduleUseCase = new CreateScheduleUseCase()
        const schedule = await createScheduleUseCase.execute({
            client_name,
            client_telephone,
            date,
            service,
            time, 
            professional_id
        })

        return response.json(schedule)
    }
}