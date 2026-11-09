const mongoose = require('mongoose');
const Student = require('../models/Student');

// GET: Récupérer tous les étudiants
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET: Récupérer un étudiant par ID
exports.getStudentById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: 'Identifiant invalide'
      });
    }

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: 'Etudiant introuvable'
      });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// POST: Ajouter un étudiant
exports.createStudent = async (req, res) => {
  try {
    const { name, email, level } = req.body;

    const student = new Student({
      name,
      email,
      level
    });

    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: 'Cette adresse e-mail existe deja'
      });
    }

    res.status(400).json({
      message: error.message
    });
  }
};

// PUT: Modifier un étudiant
exports.updateStudent = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: 'Identifiant invalide'
      });
    }

    const { name, email, level } = req.body;

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { name, email, level },
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        message: 'Etudiant introuvable'
      });
    }

    res.status(200).json(student);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: 'Cette adresse e-mail existe deja'
      });
    }

    res.status(400).json({
      message: error.message
    });
  }
};

// DELETE: Supprimer un étudiant
exports.deleteStudent = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: 'Identifiant invalide'
      });
    }

    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: 'Etudiant introuvable'
      });
    }

    res.status(200).json({
      message: 'Etudiant supprime avec succes'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
