const card = require("./card")
const classFilter = require("./classFilter")
const studentFilter = require("./studentFilter");

module.exports = (type, query) => {
    let students
    if (type === "class"){
        students = classFilter(query);
    } else if (type === "student"){
        students = studentFilter(query);
    } else {
        students = studentFilter(query);
    }
    console.log(students);
    // students.sort((a, b) => a.lastName.localeCompare(b.lastName));
    
    let cards = [];
    for (i of students){
        let studentCard = card(i);
        cards.push(studentCard);
    }
    return cards;
}