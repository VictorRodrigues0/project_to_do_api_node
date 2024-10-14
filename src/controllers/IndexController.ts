import { RequestHandler } from "express";

export const indexRouteController: RequestHandler = (req, res) => {
    res.status(200).json({ message: "success" });
}