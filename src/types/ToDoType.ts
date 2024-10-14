import { z } from "zod";
import { toDoSchema } from "../schemas/ToDoSchema";

export type ToDoType = z.infer<typeof toDoSchema>;