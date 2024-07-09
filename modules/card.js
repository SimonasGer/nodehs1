const card = require("./cardTemplate")

module.exports = (student) => {
    return card(student.id, student.firstname, student.lastName, student.class, student.subjects_grades.math, student.subjects_grades.physics, student.subjects_grades.chemistry)
}