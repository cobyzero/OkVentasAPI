import { Router } from "express";
import { createCategory, createPost, getCategory, getCredenciales, getPost } from "../Controller/homeController";
const routerHome = Router();

routerHome.get("/api/users/getName/:id", getCredenciales);

routerHome.post("/api/users/category/create", createCategory); 
routerHome.get("/api/users/category/get", getCategory);

routerHome.post("/api/users/post/create",createPost);
routerHome.get("/api/users/post/get", getPost);
export { routerHome };