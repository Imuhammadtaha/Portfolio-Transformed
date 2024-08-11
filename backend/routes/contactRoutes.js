import express from "express";
import { contactMe } from "../controller/contactController.js";

//router object
const router = express.Router();

//routes
router.post("/sendEmail", contactMe);

// export
export default router;
