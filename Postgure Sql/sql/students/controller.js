const pool = require("../db/db");
const queries = require("./queries");

const getStudent = (req, res) => {
  pool.query(queries.getStudent, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getStudentById = (req, res) => {
  const id = Number(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists.");
    }
  });
  pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
    //console.log(name,email,age,dob)
    if (error) throw error;
    res.status(201).send("Student Created Successfully");
  });
};

const removeStudent = (req, res) => {
  const id = Number(req.params.id);

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) res.send("Student does not exist in the database");

    pool.query(queries.removeStudent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("students remove successfully");
    });
  });
};

const updateStudent = (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) res.send("Student does not exist in the database");
  });
  pool.query(queries.updateStudent,[name,id],(error,results)=> {
    if(error) throw error;
    res.status(200).send("Students updated successfully");

  })
};

module.exports = {
  getStudent,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};
