import { Router } from "express";
import { getOneUser, getAllUsers, createUser, deleteUser, updateUser, loginuser } from "../controllers/users.controller.js";

const router = Router();


router
    .get('/users/', getAllUsers)
    .get('/users/:id', getOneUser)
    .post('/login', loginuser)
    .post('/users', createUser)
    .put('/users/:id', updateUser)
    .delete('/users/:id', deleteUser)
export default router;