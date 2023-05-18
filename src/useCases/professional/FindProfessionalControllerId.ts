import { Request, Response } from "express";
import { FindProfessionalUseCaseId } from "./FindProfessionalUseCaseId";




export class FindProfessionalControllerId {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const findProfessionalUseCaseId = new FindProfessionalUseCaseId();

        try {
            const professional = await findProfessionalUseCaseId.execute(id);

            return response.json(professional);
        } catch (error) {
            return response.status(500).json({ error: "Failed to find professional" });
        }
    }
}