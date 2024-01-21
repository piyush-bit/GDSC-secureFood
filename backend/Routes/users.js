import  express  from "express";
import { verifyToken } from "../verifyTocken.js";
import { deleteUser, subscribe, unsubscribe, update, user } from "../Controllers/user.js";
import { getSubscribedCourses } from "../Controllers/Course.js";
const router = express.Router();


//self detail 
router.get("/",verifyToken,user)
//update user
router.put("/:id", verifyToken, update);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//subscribe a user
router.put("/course/sub", verifyToken, subscribe);

//unsubscribe a user
router.put("/course/unsub", verifyToken, unsubscribe);

router.get('/course/subscribedCourses',verifyToken,getSubscribedCourses)

export default router;