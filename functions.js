console.log('welcome to functions...')

// simple function
function greet(name = 'molly') {
  return `Hello, ${name}!`
}
const greeting = greet('mark')

// handling undefined arguments
function sum(num1, num2) {

  num1 = +num1 //Number(num1)
  num2 = +num2 //Number(num2)
  
  if (!num1) {
    return 'first number is invalid or undefined'
  }

  if (!num2) {
    return 'second number is invalid or undefined'
  }

  return num1 + num2
}
const result = sum('p', 'j')


// working with arrays
function doubler(arr) {
  if (!arr) {
    return 'arr is undefined'
  }
  if (!Array.isArray(arr)) {
    return 'arr is not an array'
  }
  const newArr = []
  for (const num of arr) {
    newArr[newArr.length] = num * 2
  }

  return newArr
}
const doubledArray = doubler(1)


// rest and spread operators
const array = [5, 6, 7, 8, 9]
// console.log([1, 2, 3, 4, ...array, 10])

// destructuring
const obj = {
  name: 'jon',
  age: 45
}

const {name} = obj
// console.log(name)


// callback functions
const doMath = (num1, num2, func) => func(num1, num2)

const res = doMath(2, 5, (x, y) => x / y)


console.log(function x(name) {
  return 'hello ' + name
}('molly'))
