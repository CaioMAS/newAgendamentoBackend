import { Request, Response } from "express"
import { FindAllSheduleUseCase } from "./FindAllScheduleUseCase"

export class FindAllScheduleController {
    async handle(request: Request, response: Response) {
        const { id: professional_id } = request.params
        const findAllScheduleUseCase = new FindAllSheduleUseCase()

        const schedules = await findAllScheduleUseCase.execute({
            professional_id,
        })

        return response.json(schedules)
    }
}
