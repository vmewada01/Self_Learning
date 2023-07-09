const { Student } = require("../Model/Student.model");
const { Router } = require("express");
const {
  studentController
} = require("../controllers/student.controllers");


const studentRouter = Router();

studentRouter.get("/", studentController.getStudent);

studentRouter.get("/:studentname", studentController.getStudentbyId);

studentRouter.post("/addStudents", studentController.postStudent);

studentRouter.delete("/:studentname",studentController.deleteStudent)

studentRouter.patch("/:_id",studentController.patchStudent)

studentRouter.put("/:_id",studentController.putStudent)
module.exports = { studentRouter };
