import { prisma } from "../../services/database"


interface ICreateSchedule {
    service: string,
    date: Date,
    time: string,
    client_name: string,
    client_telephone: string,
    professional_id: string,
}


export class CreateScheduleUseCase {
    async execute({service, date, time, client_name, client_telephone, professional_id}: ICreateSchedule) {
        const day = new Date(date)               
        const schedule = await prisma.schedule.create({
            data: {
                service,
                date: day,
                time,
                client_name,
                client_telephone,
                professional_id
            }
        })

        return schedule
    }
}