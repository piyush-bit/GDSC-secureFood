import express from "express";
import { googleAuth, signin, signout, signup } from "../Controllers/auth.js";
import { verifyToken } from "../verifyTocken.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)

router.post("/signout",verifyToken,signout)

//GOOGLE AUTH
router.post("/google", googleAuth)

export default router;