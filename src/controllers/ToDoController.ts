import { RequestHandler } from "express";
import { toDoSchema } from "../schemas/ToDoSchema";
import moment from "moment";
import { createToDoService, deleteToDoService, listAllToDosService, updateToDoService } from "../services/ToDoService";

export const toDoIndexController: RequestHandler = (req, res) => {
    res.status(200).json({ message: "success" });
}

export const createToDoController: RequestHandler = async (req, res) => {
    const data = req.body;
    const userId = req.body.user.id;

    data.term = new Date(moment(data.term).format("YYYY-MM-DD"));
    console.log(data);

    const refatoredData = {
        ...data,
        userId
    }

    const formatedData = toDoSchema.safeParse(refatoredData);

    if (!formatedData.success) {
        res.status(400).json({ message: "Invalid data" });
        return;
    }

    const createdToDo = await createToDoService(formatedData.data);

    if (!createdToDo) {
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }

    res.status(201).json({ message: "To Do created with success" });
}

export const listAllToDosController: RequestHandler = async (req, res) => {
    const userId = req.body.user.id;

    const toDos = await listAllToDosService(userId);

    if (!toDos) {
        res.status(400).json({ message: "To Dos not found" });
        return;
    }

    res.status(200).json({ toDos });
}

export const updateToDoController: RequestHandler = async (req, res) => {
    const data = req.body;
    const id = Number(req.params.id);
    const userId = req.body.user.id;

    data.term = new Date(moment(data.term).format("YYYY-MM-DD"));

    const refatoredData = {
        ...data,
        userId
    }

    const formatedData = toDoSchema.safeParse(refatoredData);

    if (!formatedData.success) {
        res.status(400).json({ message: "Invalid data" });
        return;
    }

    const updatedToDo = await updateToDoService(id, userId, formatedData.data);

    if (!updatedToDo) {
        res.status(400).json({ message: "To Do not found" });
        return;
    }

    res.status(200).json({ message: "To Do updated with success" });
}

export const deleteToDoController: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
    const userId = req.body.user.id;

    const deletedToDo = await deleteToDoService(id, userId);

    if (!deletedToDo) {
        res.status(400).json({ message: "To Do not found" });
        return;
    }

    res.status(200).json({ message: "To Do deleted with success" });
}
