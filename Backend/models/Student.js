const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  studentName: { type: String, required: true },
  dept: { type: String, required: true },
  year: { type: String, required: true },
  guruFirstDomain: { type: String, required: true },
  guruFirstChoice: { type: String, required: true },
  guruFirstCompany: { type: String, required: true },
  guruFirstDesignation: { type: String, required: true },
  guruFirstSector: { type: String, required: true },
  guruSecondDomain: { type: String, required: true },
  guruSecondChoice: { type: String, required: true },
  guruSecondCompany: { type: String, required: true },
  guruSecondDesignation: { type: String, required: true },
  guruSecondSector: { type: String, required: true },
  guruThirdDomain: { type: String, required: true },
  guruThirdChoice: { type: String, required: true },
  guruThirdCompany: { type: String, required: true },
  guruThirdDesignation: { type: String, required: true },
  guruThirdSector: { type: String, required: true }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;