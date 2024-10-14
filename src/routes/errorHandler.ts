import { ErrorRequestHandler, RequestHandler } from "express";

export const urlNotFounError: RequestHandler = (req, res) => {
    res.status(404).json({ message: "url not found" });
}

export const internalError: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
}