import { z } from "zod";
import { UserLoginSchema, UserSchema } from "../schemas/UserSchema";

export type UserType = z.infer<typeof UserSchema>;

export type UserLoginType = z.infer<typeof UserLoginSchema>;