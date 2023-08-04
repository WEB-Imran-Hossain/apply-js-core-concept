function getSumOfAnArray(numbers) {
    // console.log(Numbers);
    // for(const i = 0; i < numbers.length; i++){
        
    // }
    // upore line const dia 1 kore incrased kora jai na. tai let use korte hobe
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
      const index =   i;
      const element = numbers[index]
      sum = sum + element;
      console.log(element, sum);
    }
    return sum;

}

const myNumbers = [5, 7, 8, 10, 45, 30];
getSumOfAnArray(myNumbers);