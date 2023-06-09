import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type TokenPayload = {
    id: string
    iat: number
    exp: number
}
export function EnsureAuthentication(request: Request, response: Response, next: NextFunction) {

    const { authorization } = request.headers

    if (!authorization) {
        return response.status(401).json({ error: "Token not provided" })
    }

    const [, token] = authorization.split(" ")

    try {
        const decoded = verify(token, "13474f3ed4aa1d5671be1267e2c57753")
        const { id } = decoded as TokenPayload

        request.adminId = id
        next()
    } catch (error) {
        return response.status(401).json({ error: "Token invalid" })
    }
} 