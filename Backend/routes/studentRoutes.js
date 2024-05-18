const express = require('express');
const Student = require('../models/Student');

const router = express.Router();

// Create a new student
router.post('/', async (req, res) => {
  const studentData = req.body;

  try {
    const existingStudent = await Student.findOne({ email: studentData.email });
    if (existingStudent) {
      return res.status(400).json({ message: 'Email is already registered' });
    }
    const student = await Student.create(studentData);
    res.status(201).json("Sent succesfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a student by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a student by ID
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a student by ID
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;