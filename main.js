// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
function createUser(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName
    }
}

function setAge(user, age){
    return {
        firstName: user.firstName,
        lastName: user.lastName,
        age: age
    }
}

function incrementAge(user){
    user.age++;
    return user;
}

function fixCar(car){
    car.needsMaintenance = false;
    return car;
}

function addGrades(student, newGrades){
    for(let i of newGrades){
        student.grades.push(i);
    }
    return student;
}

function getDataType(obj, key){ 
    if(obj.hasOwnProperty(key)){
        return typeof obj[key];
    }
}

function addTodo(arrToDo, newToDo){
    arrToDo.push(newToDo);
    return arrToDo;
}

function addSong(playlist, song){
    playlist.duration += song.duration;
    playlist.songs.push(song);
    return playlist;
}

function updateReportCard(reportCard, newGrade){
    reportCard.grades.push(newGrade);
    let min = 100;
    let max = 0;
    let sum = 0;
    for(let i of reportCard.grades){
        min = Math.min(min, i);
        max = Math.max(max, i);
        sum += i;
    }
    reportCard.lowestGrade = min;
    reportCard.highestGrade = max;
    let average = sum/reportCard.grades.length;
    let dec = String(average).split('.');
    if(Number(dec[1])/10 <= .49){
        average = Math.round(average) + .50;
    }else if(Number(dec[1]/10 >= .51)){
        average = Math.round(average);
    }
    reportCard.averageGrade = average;
    return reportCard;
}

// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
