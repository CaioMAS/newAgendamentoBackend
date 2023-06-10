import { prisma } from "../../services/database"

export class FindProfessinalIdDateUseCase {
    async execute(id: string, date: string) {
        try {
            const professional = await prisma.professional.findFirst({
                where: {
                    id,
                },
                select: {
                    Schedule: {
                        where: {
                            date: date,
                        },
                    },
                },
            })

            if (!professional) {
                throw new Error("Professional not found")
            }

            const sortedSchedule = professional.Schedule.sort((a, b) => {
                const timeA = new Date(`1970-01-01T${a.time}`)
                const timeB = new Date(`1970-01-01T${b.time}`)
                return timeA.getTime() - timeB.getTime()
            })

            return sortedSchedule
        } catch (error) {
            throw new Error("Failed to find professional")
        }
    }
}
