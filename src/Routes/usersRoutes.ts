import { Router } from "express";
import { loginUser, registerUser } from "../Controller/usersController";
const router = Router();

router.post("/api/users/login", loginUser); 
router.post("/api/users/register", registerUser);
export { router };