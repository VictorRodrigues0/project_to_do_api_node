import { Router } from "express";
import { deleteUserController, listAllUsersController, loginUserController, registerUserController, updateUserController, userIndexController } from "../controllers/UserController";
import { localStrategyAuth } from "../middlewares/passport-local";
import { jwtStrategyAuth } from "../middlewares/passport-jwt";

const router = Router();

router.get("/", userIndexController);
router.post("/register", registerUserController);
router.post("/login", localStrategyAuth, loginUserController);
router.get("/list", listAllUsersController);
router.put("/update/:id", jwtStrategyAuth, updateUserController);
router.delete("/delete/:id", jwtStrategyAuth, deleteUserController);

export default router;