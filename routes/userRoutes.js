import express from "express";
import {getAllUsersController} from "../controllers/userController.js";

const router = express.Router();

//get products
router.get("/get-allUser", getAllUsersController);

export default router;