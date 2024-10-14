import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const createToDoModel = async (data: Prisma.toDosCreateInput) => {
    try {
        return await prisma.toDos.create({ data });
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const listAllToDosModel = async (id: number) => {
    try {
        return await prisma.toDos.findMany({ where: { userId: id } });
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const updateToDoModel = async (id: number, userId: number, data: Prisma.toDosUpdateInput) => {
    try {
        return await prisma.toDos.update({ where: { id, userId }, data });
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const deleteToDoModel = async (id: number, userId: number) => {
    try {
        return await prisma.toDos.delete({ where: { id, userId } });
    } catch (err) {
        console.log(err);
        return false;
    }
}