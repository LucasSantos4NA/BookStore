import jwt from "jsonwebtoken";
import { CONFIG } from "../config/constants";

export const authMiddleware = (req: any, res: any, next: any) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ error: "Token não encontrado" });
  }

  const bearerToken = authorization.split(" ")[1];

  if (!bearerToken) {
    return res.status(401).json({ error: "Token não aaaa" });
  }

  jwt.verify(bearerToken, CONFIG.JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido." });
    }

    next();
  });
};
