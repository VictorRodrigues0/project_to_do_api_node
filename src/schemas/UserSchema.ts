import z from "zod";

export const UserSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6)
});

export const UserLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});