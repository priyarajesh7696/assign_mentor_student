import express from "express";
import studentModule from "../controllers/student.js"
const router = express.Router();
router.get('/get',studentModule.getStudent)
router.post('/create',studentModule.createStudent)
router.post('/assign_mentor',studentModule.assignMentor)

export default router