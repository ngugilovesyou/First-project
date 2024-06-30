const prompt = require('prompt-sync')();
const basicSalary = parseFloat(prompt("Input basic salary:  " ));
const benefits = parseFloat(prompt("Input benefits:  " ));

const grossSalary =basicSalary+benefits

function getPaye(grossSalary){
   if(grossSalary <  24000){
    // let paye;
    return paye = grossSalary * 0.01
    
   }else if (grossSalary > 24000){
    return paye = grossSalary * 0.25
   }else if (grossSalary > 32333){
    return paye = grossSalary * 0.3
   }else if(grossSalary> 500000) {
    return paye = grossSalary * 0.325
   }else if (grossSalary > 800000){
    return paye = grossSalary * 0.35
   }else {
    return "Please insert correct number"
   }
}

function getNHIFDeductions (grossSalary){
    if(grossSalary < 5999){
        return 150
    }else if(grossSalary > 5999){
        return 300
    }else if(grossSalary > 7999){
      return 400
    }else if (grossSalary > 11999){
        return 500
    }else if(grossSalary > 14999){
        return 600
    }else if(grossSalary > 19999){
        return 750
    }else if(grossSalary > 24999){
        return 850
    }else if(grossSalary > 29999){
       return 900
    }else if(grossSalary > 34999){
    return 950
    }else if(grossSalary > 39999){
        return 1000
    }else if (grossSalary > 44999){
        return 1100
    }else if (grossSalary > 49999){
        return 1200
    }else if(grossSalary > 59999){
        return 1300
    }else if (grossSalary > 69999){
        return 1400
    }else if(grossSalary > 79999){
        return 1500
    }else if (grossSalary > 89999){
        return 1600
    }else if(grossSalary > 99999){
        return 1700
    }else {
        return "Input correct digits"
    }
}

function getNSSFdeductions(basicSalary){
    return basicSalary * 0.06
}

function gethouseLevy(grossSalary){
    return grossSalary * 0.015
}

function netSalary(basicSalary, benefits){
    const grossSalary = basicSalary + benefits;
    const paye = getPaye(grossSalary);
    const nhif = getNHIFDeductions(grossSalary);
    const nssf = getNSSFdeductions(basicSalary);
    const houseLevy = gethouseLevy(grossSalary);

    const netSalary = grossSalary - (paye + nhif + nssf + houseLevy);
    return netSalary;

  //netSalary=grossSalary -(HouseLevy-getNSSFdeductions-getNHIFDeductions-getPaye)
  return netSalary;
}
console.log("Net Salary: " + netSalary(basicSalary, benefits))
//console.log(netSalary());
