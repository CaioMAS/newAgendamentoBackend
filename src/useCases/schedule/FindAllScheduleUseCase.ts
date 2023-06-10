import { prisma } from "../../services/database"

interface IFindSchedule {
    professional_id: string
}

export class FindAllSheduleUseCase {
    async execute({ professional_id }: IFindSchedule) {
        const schedules = await prisma.schedule.findMany({
            where: {
                professional_id: professional_id,
            },
        })

        return schedules
    }
}
