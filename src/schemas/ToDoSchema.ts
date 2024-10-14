import { z } from "zod";

export const toDoSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(2),
    task: z.string().min(5),
    priority: z.string().min(5),
    status: z.string().min(1),
    term: z.date(),
    category: z.string().min(1),
    description: z.string().optional(),
    userId: z.number()
});