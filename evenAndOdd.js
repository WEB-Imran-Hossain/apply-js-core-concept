// finding even
function isEven(number) {
    const reminder = number % 2;
    // console.log(reminder);
    if (reminder === 0) {
        // console.log('number is even');
        return true;
    }

    else{
        // console.log('number is odd');
        return false;
    }
}

// call the function
const myNumberIsEven = isEven(98);
console.log(myNumberIsEven);


// finding odd
function isOdd(number) {
    const reminder = number % 2;
    // console.log(reminder);
    if (reminder === 0) {
        // console.log('number is even');
        return true;
    }

    else{
        // console.log('number is odd');
        return false;
    }
}

// call the function
const myNumberIsOdd = isEven(117);
console.log(myNumberIsOdd);