const prompt = require('prompt-sync')();


const basicSalary = parseFloat(prompt("Input basic salary:  " ));
const benefits = parseFloat(prompt("Input benefits:  " ));

//Get paye=grossSalary*rate
function getPaye(grossSalary){
   if(grossSalary <  24000){
   
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

//Deductions for NSSF=basicSalary * rate
const NSSFRate = 0.06;
function getNSSFdeductions(basicSalary){
    return basicSalary * NSSFRate;
}
//Deductions for housinglevy = basicSalary * housingLevyRate
const housingLevyRate = 0.015; 
function gethouseLevy(basicSalary){
    return basicSalary * housingLevyRate;
}

//netsalary=grossSalary-(NHIF + NSSF + houselevy + paye)         )
function netSalary(basicSalary, benefits){
    console.log(grossSalary=basicSalary + benefits);//prints out the gross salary(total employee's salary)
    console.log (paye = getPaye(grossSalary));//prints out the tax deduction
    console.log (NHIF = getNHIFDeductions(grossSalary));//prints the amount the NHIF deducted
    console.log (NSSF = getNSSFdeductions(basicSalary));//prints the amount the NSSF deducted
    console.log (houseLevy = gethouseLevy(basicSalary));//prints the amount the housing levy deducted 

   const  netSalary = grossSalary - (paye + NHIF + NSSF + houseLevy);

    return netSalary;

}

console.log ("Net Salary:" + netSalary(basicSalary, benefits)) 

