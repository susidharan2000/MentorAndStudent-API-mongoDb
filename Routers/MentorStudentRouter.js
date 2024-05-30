import express from "express";
import { AssignStudentToMentor, ChangeMentortostudent, createMentor, createStudent, GetAllStudentformMentor, getMentor, getPreviousMentor, getStudent } from "../Controllers/MentorStudentController.js";

const router = express.Router();

router.post('/creatementor',createMentor);
router.get('/getmentor',getMentor);
router.post('/createstudent',createStudent);
router.get('/getstudent',getStudent);
router.put('/assignStudent/:Mentorid/:Studentid',AssignStudentToMentor);
router.put('/changementor/:Studentid/:newMentorid',ChangeMentortostudent);
router.get('/getallstudent/frommentor/:mentorid',GetAllStudentformMentor);
router.get('/prementor/:studentId',getPreviousMentor);

export default router;