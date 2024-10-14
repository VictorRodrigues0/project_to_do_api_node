import e from "express";
import { createToDoModel, deleteToDoModel, listAllToDosModel, updateToDoModel } from "../models/ToDoModel";
import { ToDoType } from "../types/ToDoType";

export const createToDoService = async (data: any) => {
    return await createToDoModel(data);
}

export const listAllToDosService = async (id: number) => {
    return await listAllToDosModel(id);
}

export const updateToDoService = async (id: number,userId:number, data: ToDoType) => {
    return await updateToDoModel(id,userId, data);
}

export const deleteToDoService = async (id: number, userId: number) => {
    return await deleteToDoModel(id, userId);
}