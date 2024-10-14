import { UserLoginType, UserType } from "../types/UserType";
import jwt from "jsonwebtoken";

export const tokenJWT = (user: UserType) => {
    const payload = {
        id: user.id
    }

    return jwt.sign(payload, process.env.JWT_KEY as string, {
        expiresIn: "1d"
    });
}