import express from "express"
import mentorModule from "../controllers/mentor.js"
const  router = express.Router();
router.get('/get',mentorModule.getMentors)
router.post('/create',mentorModule.createMentor)
router.post('/assign_student',mentorModule.assignStudent)
router.get('/mentorlist',mentorModule.MentorStudentList)
export default router