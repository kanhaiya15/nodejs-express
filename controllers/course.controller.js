const Course = require("../models/course.model");
// Create and Save a new Course
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Course
    const course = new Course({
        courseName: req.body.courseName,
        courseDuration: req.body.courseDuration,
        courseFee: req.body.courseFee,
        isActive: req.body.isActive ? req.body.isActive : false
    });
  
    // Save Tutorial in the database
    course.save().then(data => {
        res.send(data);
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

// Retrieve all Courses from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Course with an id
exports.findOne = (req, res) => {
  
};

// Update a Course by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Course with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Courses from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Courses
exports.findAllPublished = (req, res) => {
  
};