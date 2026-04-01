import { Router } from "express";
import UserController from "../controllers/userController.js";

const router = Router();

/* 

    Aqui ficara as rotas do usuario, meio obvio né

*/

router.post("/createUser", UserController.createUser);

router.post("/loginUser", UserController.loginUser)

router.get("/getUsers", UserController.getUsers)

export default router;
