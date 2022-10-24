const fruits = ['banana','orange','mango','lemon']
let firstFruit = fruits[0]

console.log(firstFruit)

secondFruit = fruits[1]
console.log(secondFruit)

let lastFruit = fruits[3]
console.log(lastFruit)

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex]
console.log(lastFruit)

//---

const numbers = [ 0 , 3.14 , 9381 , 37 , 98.6 , 100 ]   //Set of numbers

console.log(numbers.length) // => to know the size of the array, which is 6
console.log(numbers) // => [ 0 , 3.14 , 9.81 , 37 , 98.6 , 100 ]
console.log(numbers[0]) // => 0
console.log(numbers[5]) // => 100

lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]); // => 100

//---

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
] // List of web technologies

console.log(webTechs)                   // all the array items
console.log(webTechs.length)    // => to know the size of the array, which is 7
console.log(webTechs[0])            // => HTML
console.log(webTechs[6])            // => MongoDB

lastIndex = webTechs.length - 1;
console.log(webTechs[lastIndex]); // => MongoDB

//---

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
] // List of countries

console.log(countries)             // => all countries in array
console.log(countries[0])     // => Albania
console.log(countries[10])  // => Kenya

lastIndex = countries.length - 1;
console.log(countries[lastIndex]); // => Kenya

//---

const shppingCart = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]

//---

/* Trying to understand the slice() method */
var elements = ['Task 1','Task 2','Task 3','Task 4','Task 5',]


console.log(elements.slice(2));
console.log(elements.slice(2,4));
console.log(elements.slice(1,5));

//---

/* The splice() method  changes the contents of an array by removing 
existing elements and/or adding new elements. Be careful, splice()
 method mutates the array. */

