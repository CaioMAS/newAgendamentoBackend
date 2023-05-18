import { prisma } from "../../services/database"


export class FindProfessionalUseCaseId {
    async execute(id: string) {
      try {
        const professional = await prisma.professional.findFirst({
          where: {
            id
          },
          select: {
            services: true
          }
        })
  
        if (!professional) {
          throw new Error("Professional not found")
        }
  
        const serviceIds = professional.services.map(service => service.id)
        const services = await prisma.service.findMany({
          where: {
            id: {
              in: serviceIds
            }
          }
        })
  
        return services
      } catch (error) {            
        throw new Error("Failed to find professional")
      }
    }
  }






