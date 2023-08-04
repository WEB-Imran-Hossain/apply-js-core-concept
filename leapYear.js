// find the leap year
function isLeapYear(year) {
    const reminder = year % 4;
    if (reminder === 0) {
        // console.log('your year is leap year');
        return true;
    }

    else{
        // console.log('your year is not leap year');
        return false;
    }

}

// call the function
const leapYear = isLeapYear(2016);
console.log(leapYear);
