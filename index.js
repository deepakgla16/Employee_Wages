const IS_Absent = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Num_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = [];

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

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < Num_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);

console.log("UC7A - Total Days:", totalWorkingDays, "Total Hrs:", totalEmpHrs, "Emp Wage:", totalEmpWage);

let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B – Daily Wage Map");
console.log(mapDayWithWageArr);

function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C – Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D – First time Fulltime wage was earned on Day: " +
    mapDayWithWageArr.find(findFulltimeWage));

function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E – Check All Element have Full Time Wage: " +
    fullDayWageArr.every(isAllFulltimeWage));

function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F – Check If Any Part Time Wage: " +
    mapDayWithWageArr.some(isAnyPartTimeWage));

function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC 7G – Number of Days Emp Worked: " +
    empDailyWageArr.reduce(totalDaysWorked, 0));