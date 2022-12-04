const express = require("express");
require("./db/conn");
const Student = require("./models/student");
const app = express();
const studentRouter = require("./router/student");

const port = process.env.PORT || 3000;

app.use(express.json());

// create a new student api

// using promises

// app.post("/students", (req, res) => {
//   //   console.log(req.body);
//   const user = new Student(req.body);

//   user
//     .save()
//     .then(() => {
//       res.send(user);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

// creating a new router

// const router = new express.Router();

// we need to register out router

app.use(studentRouter);

// // using async await

// app.post("/students", async (req, res) => {
//   //   console.log(req.body);
//   try {
//     const user = new Student(req.body);
//     const createUser = await user.save();
//     res.status(201).send(createUser);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // readig the data to register for api

// app.get("/students", async (req, res) => {
//   try {
//     const studentsData = await Student.find();
//     res.send(studentsData);
//   } catch (err) {
//     res.send(err);
//   }
// });

// // reading the individual data from the Student database

// app.get("/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentData = await Student.findById(_id);
//     if (!studentData) {
//       return res.status(404).send();
//     }
//     res.send(studentData);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // handling update request in rest api (by id)

// app.patch("/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentUpdate = await Student.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });
//     res.send(studentUpdate);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// });

// // delete the students by its it

// app.delete("/students/:id", async (req, res) => {
//   try {
//     // const id = req.params.id;
//     const deleteStudent = await Student.findByIdAndDelete(req.params.id);
//     if (!req.params.id) {
//       return res.status(404).send();
//     }
//     res.send(deleteStudent);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

app.listen(3000, (req, res) => {
  console.log(`server is running on port: ${port}`);
});
