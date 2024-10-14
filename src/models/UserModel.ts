import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const registerUserModel = async (data: Prisma.usersCreateInput) => {
    try {
        return await prisma.users.create({ data });
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const listAllUsersModel = async () => {
    try {
        return await prisma.users.findMany({ orderBy: { id: 'asc' }, select: { id: true, name: true, email: true, password: true } });
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const updateUserModel = async (id: number, data: Prisma.usersUpdateInput) => {
    try {
        return await prisma.users.update({ where: { id }, data });
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const deleteUserModel = async (id: number) => {
    try {
        return await prisma.users.delete({ where: { id } });
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const getUserByidModel = async (id: number) => {
    try {
        return await prisma.users.findUnique({ where: { id } });
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const getUserByEmailModel = async (email: string) => {
    try {
        return await prisma.users.findUnique({ where: { email } });
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const getUserByEmailAndPasswordModel = async (email: string, password: string) => {
    try {
        return await prisma.users.findFirst({ where: { email, password } });
    } catch (err) {
        console.log(err);
        return false;
    }
}