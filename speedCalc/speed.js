const prompt = require('prompt-sync')();



function carSpeed (){
const speed = prompt('Input the speed of the car: ');
const speedLimit= 70;

    if(speed < speedLimit){
        return "Ok"
    }else {
        let demeritPoint = Math.floor((speed - speedLimit) / 5);
        if (demeritPoint>12) {
            return "License Suspended";
    
        }  else{
            return `Point: ${demeritPoint}`;
        }

 };

}
console.log (carSpeed());