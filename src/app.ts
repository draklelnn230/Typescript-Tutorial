// Code goes here
// const userName = 'Max';
// let age = 30;

// age = 29;

// function add(a: number, b: number) {
//     let result = a + b;
//     return result;
// }

// const add = (a: number, b: number = 1) => a + b;


// const printOutput: (a: number | string) => void = output => console.log(output)

// const button = document.querySelector('button')

// if (button) {
//     button.addEventListener('click', event => {
//         console.log(event)
//     })
// }

// printOutput(add(5))

// The Spread Operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking']

activeHobbies.push(...hobbies)

const person = {
    firstName: 'Max',
    age: 30
}

const copiedPerson = { ...person } // This Copy will remove the reference.

// The Rest Parameter
const add = (...numbers: number[]) => {
    let result = 0;
    return numbers.reduce((currentResult, curValue) => {
        return currentResult + curValue
    }, 0)
}


const addedNumber = add(5, 10, 2, 3.7)
console.log(addedNumber)

// Array & Object Destructuring

const [hobby1, hobby2, ...remainingHobbies] = hobbies

console.log(hobby2)

const { firstName: userName, age } = person

console.log(userName)