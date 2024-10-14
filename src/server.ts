import express, { urlencoded } from "express";
import helmet from "helmet";
import path from "path";
import routerIndex from "./routes";
import dotenv from "dotenv";
import { internalError, urlNotFounError } from "./routes/errorHandler";
import passport from "passport";
import { localStrategy } from "./middlewares/passport-local";
import { jwtStrategy } from "./middlewares/passport-jwt";

dotenv.config();

const app = express();

app.use(helmet());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

passport.use(localStrategy);
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/", routerIndex);
app.use(urlNotFounError);
app.use(internalError);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on link: http://localhost:${process.env.PORT}`)
});