import jwt from "jsonwebtoken";
import { CONFIG } from "../config/constants";

const TOKEN_EXPIRTAION = "90d";

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, CONFIG.JWT_SECRET, { expiresIn: TOKEN_EXPIRTAION });
};
