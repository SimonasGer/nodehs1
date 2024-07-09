const fs = require("fs");
let data = fs.readFileSync("./data/data.json", "utf-8");
data = JSON.parse(data);
data = data.moksleiviai;
module.exports = (query) => {
    if (query){
        answer = data.filter((item) => item.firstname == query.firstname || item.lastName == query.lastname);
    } else {
        answer = data;
    }
    if (answer.length >= 1){
        return answer;
    }
}