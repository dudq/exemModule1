function printFibonacci(number) {
    let firstNumber =1;
    let secondNumber =1;
    let fibonacciList = [firstNumber,secondNumber];
    while (secondNumber<number){
        let fibonacci = firstNumber+secondNumber;
        if (fibonacci<number)
            fibonacciList.push(fibonacci);
        firstNumber=secondNumber;
        secondNumber=fibonacci;
    }
    document.write(fibonacciList);
}
let testNumber =25;
printFibonacci(testNumber);
