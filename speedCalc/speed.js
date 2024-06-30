const prompt = require('prompt-sync')();


function carSpeed (){
const speed = prompt('Input the speed of the car: ');
const speedLimit= 70;

    if(speed < speedLimit){
        return "Ok"
    }else { //takes the speed subtracts the speedlimit and divides by 5km/hr to get distance above speed limit
        let demeritPoint = Math.floor((speed - speedLimit) / 5);//returns an integer
        if (demeritPoint>12) {
            return "License Suspended";
    
        }  else{
            return `Point: ${demeritPoint}`;
        }

 };

}
console.log (carSpeed());