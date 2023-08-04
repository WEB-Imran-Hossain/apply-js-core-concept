// miles to convert kilometers
function milesToKilometers(miles) {
    const kilometer = miles*1.60934;
    return kilometer;
}

// call the function
const miles = 2;
const kilometer = milesToKilometers(miles);
console.log(kilometer);