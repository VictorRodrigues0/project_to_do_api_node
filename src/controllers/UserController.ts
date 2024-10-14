import { RequestHandler } from "express";
import { UserLoginSchema, UserSchema } from "../schemas/UserSchema";
import { deleteUserService, listAllUsersService, registerUserService, updateUserService } from "../services/UserService";
import bcrypt from "bcrypt";

export const userIndexController: RequestHandler = (req, res) => {
    res.status(200).json({ message: "success" });
}

export const registerUserController: RequestHandler = async (req, res) => {
    const data = req.body;
    data.password = await bcrypt.hash(data.password, 8);

    const formatedData = UserSchema.safeParse(data);

    if (!formatedData.success) { res.status(400).json({ message: "Invalid data" }); return; }

    const createdUser = await registerUserService(formatedData.data);

    if (!createdUser) { res.status(500).json({ message: "Internal Server Error" }); return; }

    res.status(201).json({ message: "Register with success" });
}

export const loginUserController: RequestHandler = async (req, res) => {
    const data = req.body;

    const user = req.body.user;
    const token = req.authInfo;

    res.status(200).json({ user, token });
}

export const listAllUsersController: RequestHandler = async (req, res) => {
    const users = await listAllUsersService();

    if (!users) { res.status(400).json({ message: "Users not found" }); return; }

    res.status(200).json({ users });
}

export const updateUserController: RequestHandler = async (req, res) => {
    const data = req.body;
    const id = Number(req.params.id);

    const formatedData = UserSchema.safeParse(data);

    if (!formatedData.success) { res.status(400).json({ message: "Invalid data" }); return; }

    const response = await updateUserService(id, formatedData.data);

    if (!response) { res.status(400).json({ message: "User not found" }); return; }

    res.status(200).json({ message: "User updated with success" });
}

export const deleteUserController: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);

    const deletedUser = await deleteUserService(id);

    if (!deletedUser) { res.status(400).json({ message: "User not found" }); return; }

    res.status(200).json({ message: "User deleted with success" });
}