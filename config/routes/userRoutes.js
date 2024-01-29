import  express from "express";
import {createNewUser} from "../../src/api/v1/controllers/userControllers.js"


const router = express.Router();

router.post("/usuarios", createNewUser)

export default router;