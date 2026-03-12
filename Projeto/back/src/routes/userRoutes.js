import { Router } from "express";
import UserController from "../controllers/userController.js";

const router = Router();

/* 

    Aqui ficara as rotas do usuario, meio obvio né

*/

router.get("/users", UserController.getUsers);
router.post("/users", UserController.createUser);

export default router;