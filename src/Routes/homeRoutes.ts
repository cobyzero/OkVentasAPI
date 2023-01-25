import { Router } from "express";
import { createCategory, getCategory, getName } from "../Controller/homeController";
const routerHome = Router();

routerHome.get("/api/users/getName/:id", getName);
routerHome.post("/api/users/category/create",createCategory);


routerHome.get("/api/users/category/get",getCategory);
export { routerHome };