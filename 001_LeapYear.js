function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(`2020년은 윤년인가요? === ${isLeapYear(2020)}`);
console.log(`2009년은 윤년인가요? === ${isLeapYear(2009)}`);
console.log(`년은 윤년인가요? === ${isLeapYear(1996)}`);