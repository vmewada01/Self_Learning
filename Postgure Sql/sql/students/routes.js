const { Router } = require("express");
const controlller = require("./controller");
const router = Router();

router.get("/", controlller.getStudent);
router.post("/", controlller.addStudent);
router.get("/:id", controlller.getStudentById);
router.post("/:id", controlller.updateStudent);
router.delete("/:id", controlller.removeStudent);

module.exports = router;
