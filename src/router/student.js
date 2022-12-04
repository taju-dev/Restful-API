const express = require("express");
const Student = require("../models/student");
const router = new express.Router();

// defining the router

// app.use(studentRouter);

// using async await

router.post("/students", async (req, res) => {
  //   console.log(req.body);
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// readig the data to register for api

router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (err) {
    res.send(err);
  }
});

// reading the individual data from the Student database

router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    if (!studentData) {
      return res.status(404).send();
    }
    res.send(studentData);
  } catch (err) {
    res.status(500).send(err);
  }
});

// handling update request in rest api (by id)

router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentUpdate = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(studentUpdate);
  } catch (err) {
    res.status(404).send(err);
  }
});

// delete the students by its id

router.delete("/students/:id", async (req, res) => {
  try {
    // const id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteStudent);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
