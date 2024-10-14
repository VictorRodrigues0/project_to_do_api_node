import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { getUserByIdService } from "../services/UserService";
import { RequestHandler } from "express";
import passport from "passport";
import { UserType } from "../types/UserType";

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY as string
}

export const jwtStrategy = new JWTStrategy(options, async (payload, done) => {
    const user = await getUserByIdService(payload.id);

    if (!user) return done(null, false);

    return done(null, user);
});

export const jwtStrategyAuth: RequestHandler = (req, res, next) => {
    const jwtAutorization = passport.authenticate("jwt", (err: any, user: UserType | false) => {
        if (!user) return res.status(403).json("Acesso negado");

        req.body.user = user;
        return next();
    });
    jwtAutorization(req, res, next);
}