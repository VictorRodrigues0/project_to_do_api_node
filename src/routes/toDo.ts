import { Router } from "express";
import { createToDoController, deleteToDoController, listAllToDosController, toDoIndexController, updateToDoController } from "../controllers/ToDoController";
import { jwtStrategyAuth } from "../middlewares/passport-jwt";

const router = Router();


router.get("/", toDoIndexController);
router.post("/create", jwtStrategyAuth, createToDoController);
router.get("/list", jwtStrategyAuth, listAllToDosController);
router.put("/update/:id", jwtStrategyAuth, updateToDoController);
router.delete("/delete/:id", jwtStrategyAuth, deleteToDoController);

export default router;