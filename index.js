const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;    
    }
}

const maxhoursInMonth=100;
const NumOfWorkingDays=10
let totalEmpHrs=0;
let totalWorkingDays=0;


while (totalEmpHrs <= maxhoursInMonth && totalWorkingDays  <= NumOfWorkingDays) {
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;    
    totalEmpHrs+=getWorkingHours(empCheck);
}

let empWage=totalEmpHrs*WAGE_PER_HOURS;
console.log("Total Days:"+totalWorkingDays+" Total hrs:"+totalEmpHrs+" Emp Wage:"+empWage);
