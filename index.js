const userName = prompt("What's your name?") || null
if(userName === null || userName.trim() === '') {
    alert('Not valid name, refresh and try again')
} else {
    alert(`Hello, ${userName.trim()}. How are you?`)
}

alert(`Let's do numbers`);

const firstNumber = prompt('Enter first number');
console.log(firstNumber)
if(firstNumber === null){
    alert('Refresh and try again')
} else {
    const secondNumber = prompt('Enter second number');
    if (isNaN(firstNumber)) {
        alert(`First value not a number`);
    } else if (isNaN(secondNumber)) {
        alert(`Second value not a number`);
    } else if (secondNumber === null) {
        alert('Refresh and try again')
    } else {
        alert(`${firstNumber} + ${secondNumber} = ${+firstNumber + +secondNumber}`);
        alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
        alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
    }
}


alert(`Let's do equal`)
const firstValue = prompt('Enter first value')
if(firstValue === null){
    alert('Refresh and try again')
} else if(firstValue.trim() === '') {
    alert('Enter something')
} else {
    const secondValue = prompt('Enter second value')
    if(secondValue === null){
        alert('Refresh and try again')
    } else if(secondValue.trim() === '') {
        alert('Enter something')
    } else {
        alert(firstValue.trim() === secondValue.trim())
    }
}

alert(`Let's do another numbers`)
let numbers = prompt('Enter five numbers')
if(isNaN(numbers)){
    alert(`Your value not a number`)
} else if(numbers === null || numbers.trim() === ''){
    alert(`Your value not a number`)
} else if((!numbers.includes('-') && numbers.toString().length !== 5) || (numbers.includes('-') && numbers.toString().length !== 6)){
    alert(`Please enter 5 digits or '-' and 5 digits`)
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



