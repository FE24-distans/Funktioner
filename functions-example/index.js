function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function showSums(sumOne, sumTwo) {
    console.log(`Sum of add: ${sumOne}`);
    console.log(`Sum of multiply: ${sumTwo}`);
}

function start() {
    const sumOfAdd = add(5, 10);
    const sumOfMultiply = multiply(10, 10);

    showSums(sumOfAdd, sumOfMultiply);
}

start();