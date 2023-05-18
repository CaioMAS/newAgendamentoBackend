import { Request, Response } from "express";
import { FindProfessinalIdDateUseCase } from "./FIndProfessinalIdDateUseCase";




export class FindProfessinalIdDateController {
  async handle(request: Request, response: Response) {
    const { id, date } = request.params;
    

    const findProfessionalIdDateUseCase = new FindProfessinalIdDateUseCase()

    try {
      const services = await findProfessionalIdDateUseCase.execute(id, date);

      return response.json(services);
    } catch (error) {
      return response.status(500).json({ error: "Failed to find professional" });
    }
  }
}