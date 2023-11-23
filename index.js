const userName = prompt("What's your name?") || null
if(userName === null || userName.trim() === '') {
    alert('Not valid name, refresh and try again')
} else {
    alert(`Hello, ${userName.trim()}. How are you?`)
}

alert(`Let's do numbers`);

const firstNumber = +prompt('Enter first number').trim();
const secondNumber = firstNumber !== null && +prompt('Enter second number').trim();

if (isNaN(firstNumber)) {
    alert(`First value not a number`);
} else if (isNaN(secondNumber) || secondNumber === null) {
    alert(`Second value not a number`);
} else {
    alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
    alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
    alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
    alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
}

alert(`Let's do equal`)
const firstValue = prompt('Enter first value').trim()
const secondValue = prompt('Enter second value').trim()
if(firstValue !== null || secondValue !== null){
    alert(firstValue === secondValue)
} else {
    alert('You should type something')
}

alert(`Let's do another numbers`)
let numbers = +prompt('Enter five numbers').trim()
if(isNaN(numbers) || numbers === null){
    alert(`Your value not a number`)
} else if(numbers.toString().length !== 5){
    alert(`Please enter 5 digits`)
} else {
    const number5 = numbers % 10
    numbers = (numbers - number5) / 10
    const number4 = numbers % 10
    numbers = (numbers - number4) / 10
    const number3 = numbers % 10
    numbers = (numbers - number3) / 10
    const number2 = numbers % 10
    numbers = (numbers - number2) / 10
    const number1 = numbers % 10
    alert(`${number1} ${number2} ${number3} ${number4} ${number5}`)
}



