import { prisma } from "../../services/database"


interface ICreateSchedule {
    service: string,
    date: Date,
    time: Date,
    client_name: string,
    client_telephone: string
}


export class CreateScheduleUseCase {
    async execute({service, date, time, client_name, client_telephone}: ICreateSchedule) {
        const schedule = await prisma.schedule.create({
            data: {
                service,
                date,
                time,
                client_name,
                client_telephone
            }
        })

        return schedule
    }
}