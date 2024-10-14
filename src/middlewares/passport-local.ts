import { Strategy as LocalStrategy } from "passport-local";
import { getUserByEmailAndPasswordService, getUserByEmailService } from "../services/UserService";
import { tokenJWT } from "../functions/Tokens";
import { StrategyType } from "../types/StrategyType";
import { RequestHandler } from "express";
import passport from "passport";
import bcrypt from "bcrypt";

export const localStrategy = new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
}, async (email, password, done) => {
    var user = await getUserByEmailService(email);

    if (!user) return done(null, false);

    if (!(await bcrypt.compare(password, user.password))) {
        return done(null, false);
    }

    user = await getUserByEmailAndPasswordService(email, user.password);

    if (!user) return done(null, false);

    const token = tokenJWT(user);

    const response: StrategyType = {
        auth: { token }, user
    }

    return done(null, response);
});

export const localStrategyAuth: RequestHandler = (req, res, next) => {
    const localAutentication = passport.authenticate("local", (err: any, response: StrategyType | false) => {
        if (!response) return res.status(403).json("Acesso negado");

        req.body.user = response.user;
        req.authInfo = response.auth;

        return next();
    });
    localAutentication(req, res, next);
}