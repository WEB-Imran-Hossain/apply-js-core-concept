// 1 * 2 * 3 * 4 * 5 * 6 * 7
// 3! = 3*2*1 (Factorial)
// 4! = 4*3*2*1 (Factorial)
// function multiplicationOfNumbers(number){
//     let result = 1;
//     for(let i = 1; i <= number; i++){
//         result = result * i;
//     }
//     return result;
// }

// // call the function
// const result = multiplicationOfNumbers(9);
// console.log(result);


// factorial
function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

// call the function
const result = factorial(9);
console.log(result);