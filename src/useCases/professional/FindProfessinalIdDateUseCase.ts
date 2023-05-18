import { prisma } from "../../services/database";

export class FindProfessinalIdDateUseCase {
    async execute(id: string, date: string) {
        try {
          const professional = await prisma.professional.findFirst({
            where: {
              id
            },
            select: {              
              Schedule: {
                where: {
                  date: date 
                }
              }
            }
          });
    
          if (!professional) {
            throw new Error("Professional not found");
          }
    
          return professional.Schedule;
        } catch (error) {
          throw new Error("Failed to find professional");
        }
      }
}