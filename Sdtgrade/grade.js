const prompt = require('prompt-sync')();


function  studentGrade (){
const marks = prompt("Input student marks:  " );

 if (marks>=79){
    return "You scored an A!"
 }else if (marks>60){
    return "You scored a B!"
 }else if(marks>=49){
    return "You scored a C!"
 }else if(marks>=40){
    return "You scored a D!"
 }else if(marks<40){
    return "You scored an E"
 }else{
    return "Insert a number!"
 }   
}
console.log (studentGrade());