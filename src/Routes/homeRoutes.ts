import { Router } from "express";
import { getName } from "../Controller/homeController";
const routerHome = Router();

routerHome.get("/api/users/getName/:id", getName);

export { routerHome };