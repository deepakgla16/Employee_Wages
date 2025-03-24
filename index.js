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
let empDailyWageArr = new Array;

let empDailyWageMap=new Map();
let empDailyHrsMap= new Map();
let empDailyHrsAndWageArr=new Array();

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

function calDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < Num_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,calDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours :empHrs,
            dailyWage: calDailyWage(empHrs),
            toString(){
                return '\nDay ' + this.dayNum + " => Working Hours is " + this.dailyHours + " And Wage Earned = " + this.dailyWage 
            }
        }
    )

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

   
console.log(empDailyWageMap);
function totalWages(totalWage,dailwage){
    return totalWage+dailwage;
} 
console.log("UC8A-Emp wage Map totalHrs:"+Array.from(empDailyWageMap.values()).reduce(totalWages,0)) 



const findTotal = (totalVal , dailyVal) => {
    return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal , 0);
let totalSalary  = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal , 0);

console.log("UC9A - EMp Wage with Arrow: " +  " Total Hours: " + totalHours + " Total Wages: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach( (value , Key , map ) => {
    if (value == 8) fullWorkingDays.push(Key);
    else if (value == 4) partWorkingDays.push(Key)
    else nonWorkingDays.push(Key);
})
console.log("Full Working Days:- " + fullWorkingDays);
console.log("Part Working Days:- " + partWorkingDays);
console.log("Non Working Days:- " + nonWorkingDays);


console.log("UC 10 Showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr);


let totalEarnedWages = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalWorkedHours = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC 11A Total Hours: " + totalWorkedHours + " Total Wages: " + totalEarnedWages);

process.stdout.write("UC 11B Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
    .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11C PartWorkingDayStrings: " + partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D NonWorkingDayNums: " + nonWorkingDayNums);