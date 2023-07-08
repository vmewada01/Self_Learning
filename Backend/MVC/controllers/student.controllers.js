const { Student } = require("../Model/Student.model");

const getStudent = async (req, res) => {
  const student_data = await Student.find();
  res.send(student_data);
};

const getStudentbyId = async (req, res) => {
  console.log(req.params.studentname);
  const student_data = await Student.find({ name: req.params.studentname });
  res.send(student_data);
};

const postStudent = async (req, res) => {
  const payload = req.body;
  if (payload.course === "backend") {
    await Student.insertMany([payload]);
    res.send("Student data created successfully");
  } else {
    res.send("course should be backend");
  }
};

const deleteStudent = async (req, res) => {
  //console.log(req.body)
  const name = req.params.studentname;
  if (name === "Deepak") {
    console.log("hi its deleted");
    await Student.deleteOne(req.body);
  }
  // console.log(id)
  res.send("deleted successfully");
};

const patchStudent = async (req, res) => {
  const name = req.params.studentname;

  if (name === "Deepak") {
  
    const payload = req.body;
    console.log(payload)
    await Student.updateOne(payload);
  }
  res.send("Data patched successfully");
};

const putStudent = async (req, res) => {
    const name = req.params.studentname;
 // console.log(name)
    if (name === "Hero") {
    
      const payload = req.body;
      console.log(payload)
      await Student.updateMany(payload);
    }
    res.send("Data put  successfully");
  };

const studentController = {
  getStudent,
  getStudentbyId,
  postStudent,
  deleteStudent,
  patchStudent,
  putStudent
};

module.exports = { studentController };
