import { Router } from "express";
import { indexRouteController } from "../controllers/IndexController";
import userRouter from "./user";
import toDoRouter from "./toDo";

const router = Router();

router.use("/users", userRouter);
router.use("/toDos", toDoRouter);

router.get("/", indexRouteController);

export default router;