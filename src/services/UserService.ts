import { deleteUserModel, getUserByEmailAndPasswordModel, getUserByEmailModel, getUserByidModel, listAllUsersModel, registerUserModel, updateUserModel } from "../models/UserModel";
import { UserType } from "../types/UserType"

export const registerUserService = async (data: UserType) => {
    return await registerUserModel(data);
}

export const listAllUsersService = async () => {
    return await listAllUsersModel();
}

export const updateUserService = async (id: number, data: UserType) => {
    return await updateUserModel(id, data);
}

export const deleteUserService = async (id: number) => {
    return await deleteUserModel(id);
}

export const getUserByIdService = async (id: number) => {
    return await getUserByidModel(id);
}

export const getUserByEmailService = async (email: string) => {
    return await getUserByEmailModel(email);
}

export const getUserByEmailAndPasswordService = async (email: string, password: string) => {
    return await getUserByEmailAndPasswordModel(email, password);
}
