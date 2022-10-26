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

const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Suggar'
] // List of food products

console.log(shoppingCart); // => All shoppingCart in array
console.log(shoppingCart[0]); // => Milk
console.log(shoppingCart[7]); // => Sugar

lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]); // Sugar

//---

/* An array is mutable (modifiable). Once an array is created, we can modify
the contents of the array elements. */

const numBers = [ 1, 2, 3, 4, 5 ]
numBers[0] = 10;    // Changing 1 at index 0 to 10
numBers[1] = 20;    // Changing 2 at index 1 to 20

console.log(numBers) // [ 10, 20, 3, 4, 5 ]

const counTries = [
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
]

counTries[0] = 'Mexico' // Replacing Albania by Mexico
lastIndex = counTries.length -1;
counTries[lastIndex] = 'Korea' // Replacing Kenya by Korea

console.log(counTries); // ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya' ];

//---

//Métodos para manipular un arreglo.
/* Existen diferentes métodos para manipular un arreglo.Estos son algunos de los métodos que
existen para para tratar con los arraglos: 'Array', 'length', 'concat', 'indexOf', 'slice', 'splice',
'join', 'toString', 'includes', 'lastIndexOf', 'isArray', 'fill', 'push', 'pop', 'shift', 'unshift' */

//---

//Array constructor: para crear un arreglo.
const arr = Array() // Crea un arreglo vacío
console.log(arr)

const eightEmptyValues = Array(8) // Crea un arreglo con 5 valores vacíos
console.log(eightEmptyValues) // [empty x 8]

//---

//Creating static values with fill: fills all the array elements with static value
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]

//---

//Concatenating array using concat
const firstList = [ 1, 2, 3 ]
const secondList = [ 4, 5, 6 ]
const thirdList = firstList.concat(secondList);

console.log(thirdList) // [ 1, 2, 3, 4, 5, 6 ]

//---

//Getting array length
const numbErs = [1, 2, 3, 4, 5];
console.log(numbers.length) // -> 5 is the size of the array

//---

/* Getting index an element in arr array: indexOf is to check if an item exist in an array.
If it exist it returns the index else it returns -1. */

const numbers0 = [ 1, 2, 3, 4, 5 ];

console.log(numbers0.indexOf(5)); // => 4
console.log(numbers0.indexOf(0)); // => -1
console.log(numbers0.indexOf(1)); // => 0
console.log(numbers0.indexOf(6)); // => -1

//---

//Check an element if it exist in an array.
    //Check items in a list
    //Let's check if banana exist in the array
    const fruits0 = ['banana','orange','mango','lemon'];
    let index = fruits.indexOf('banana'); // 0

    if(index === -1) {
        console.log('This fruit does not exist in the array')
    } else {
        console.log('This frit does exist in the array')
    }
    //This fruit does exist in the array

    // we can use also ternary here
    index === -1 
    ? console.log('This fruit does not exist in the array')
    : console.log('This frit does exist in the array');

    //Lets check if an avocado exist in the array
    let indexOfAvocado = fruits0.indexOf('avocado') // -1, if the element not found index is -1
    if(indexOfAvocado === -1){
        console.log('This fruit does not exist in the array');
    } else {
        console.log('This fruit does exist in the array');
    }
    //This fruit does not exist in the array

//---

//Getting last index of an element in an array.
/* lastIndexOf: it gives the position of the last item in the array. If it exist, it returns
the index else it returns -1 */
const numbers1 = [ 1,2,3,4,5,3,1,2 ]

console.log(numbers1.lastIndexOf(2)); // 7
console.log(numbers1.lastIndexOf(0)); // -1
console.log(numbers1.lastIndexOf(1)); // 6
console.log(numbers1.lastIndexOf(4)); // 3
console.log(numbers1.lastIndexOf(6)); // -1

//---

//includes:
/* To check if an item exist in an array. If it exist it returns true else it returns false. */

const numbers2 = [1,2,3,4,5];

console.log(numbers2.includes(5)) // true
console.log(numbers2.includes(0)) // false
console.log(numbers2.includes(1)) // true
console.log(numbers2.includes(6)) // false

const webTechs0 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
] // A list of web technologies

console.log(webTechs0.includes('Node')) // true
console.log(webTechs0.includes('C')) // false

//---

//Checking array:
/* Array.isArray: to check if the data type is an array */
const numbers3 = [ 1,2,3,4,5 ];
console.log(Array.isArray(numBers)); //true

const number = 100;
console.log(Array.isArray(number)); //false

//---

//converting an array to string
/* toString: converts array to string */

const numbers4 = [ 1,2,3,4,5 ];
console.log(numbers4.toString()) // 1,2,3,4,5

const names = [ 
    'Asabeneh',
    'Mathias',
    'Elias',
    'Brook'
 ];
 console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

 //---

 //Joining array elements
 /* join: it is used to join the elements of the array, the argument we passed in the join method
 will be joined in the array and return as a string. By default, it joins with a coma, but we can pass
 differen string parameter which can be joined between the items. */

 const numbers5 = [1,2,3,4,5]
 console.log(numbers5.join()) // 1,2,3,4,5

 const names0 = [
    'Asabeneh',
    'Mathias',
    'Elias',
    'Brook'
 ]

 console.log(names0.join()) // Asabeneh,Mathias,Elias,Brook
 console.log(names0.join('')) // AsabenehMathiasEliasBrook
 console.log(names0.join(' ')) // Asabeneh Mathias Elias Brook
 console.log(names0.join(', ')) // Asabeneh, Mathias, Elias, Brook
 console.log(names0.join(' # ')) // Asabeneh # Mathias # Elias # Brook

 const webTechs1 = [
    'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
 ]

 console.log(webTechs1.join()) // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
 console.log(webTechs1.join(' # ')) // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

 //---

 //Slice array elements
 /* Slice: to cut out a multiple items in range. It takes two parameters: starting and ending
position. It doesn't include the ending position. */
const numbers6 = [1,2,3,4,5];

console.log(numbers6.slice()); // => it copies all item
console.log(numbers6.slice(0)); // => it copies all item
console.log(numbers6.slice(0, numbers6.length)); // => it copies all item
console.log(numbers6.slice(1,4)); // => [2,3,4] // it doesn't include the ending position

//---

/* Trying to understand the slice() method */
var elements = ['Task 1','Task 2','Task 3','Task 4','Task 5',]


console.log(elements.slice(2));
console.log(elements.slice(2,4));
console.log(elements.slice(1,5));

//---

//Splice method in an array
/* Splice: it takes three parameters: starting position, number of times to be removed and number
of items to be added */
const numbers7 = [1,2,3,4,5]
console.log(numbers7.splice()) // => remove all items
console.log(numbers7.splice(0,1)) // => remove the first item
console.log(numbers7.splice(3,3,7,8,9)) // => [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

/* The splice() method  changes the contents of an array by removing 
existing elements and/or adding new elements. Be careful, splice()
 method mutates the array. */

//---

//Adding item to an array using push
/* Push: adding item in the end. to add item to the end of an existing array we use the push method. */
const arr0 = ['item','item2','item3'];
arr0.push('new item');
console.log(arr0) // ['item','item2','item3','new item']

const numbers8 = [1,2,3,4,5];
numbers8.push(6);
console.log(numbers8); //[1,2,3,4,5,6]

numbers8.pop() // => removes one item from the end
console.log(numbers8) // => [1,2,3,4,5]

let fruits1 = [ 'banana', 'orange', 'mango', 'lemon' ];
fruits1.push('apple');
console.log(fruits1); // ['banana', 'orange', 'mango', 'lemon','apple']

fruits1.push('lime');
console.log(fruits1) // ['banana', 'orange', 'mango', 'lemon','apple','lime']

//---

//Removing the end element using pop
/* pop: removing item in the end */
const numbers9 = [1,2,3,4,5];
numbers.pop(); // remove one item from the end
console.log(numbers9); // [1,2,3,4]
 
//---
//removing an element from the beggining
/* shift: removing one array element in the beginning of the array */
const numbers10 = [1,2,3,4,5];
numbers10.shift(); // -> remove one item from the beginning
console.log(numbers10); // [2,3,4,5]

//---
/* Add an element from the beginning:
unshift: Adding array element in the beginning of the array */
const numbers11 = [ 1,2,3,4,5 ];
numbers11.unshift(0); // -> add one item from the beginning
console.log(numbers11); // -> [0,1,2,3,4,5]

//---
//Reversing array order
/* reverse: it reverses the order of an array. */
const numbers12 = [1,2,3,4,5];
numbers12.reverse() // reverse array order
console.log(numbers12) // [5,4,3,2,1]

numbers12.reverse()
console.log(numbers12) // [1,2,3,4,5]

//---
//Sorting elements in array
/* sort: arrange array elements in ascending order. Sort takes a call back function, we see how
we use sort with a call back function in the coming sections */
const webTechs2 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

webTechs2.sort();
console.log(webTechs2); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs2.reverse(); // after sorting we can reverse it
console.log(webTechs2); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

//---
//ARRAY OF ARRAYS
/* Array can store different data types, including an array itself. Let us create an array of arrays */
const fristNums = [1,2,3];
const secondNums = [1,4,9];

const arrayOfArray = [[1,2,3],[1,2,3]]
console.log(arrayOfArray[0]) // [1,2,3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = [frontEnd,backEnd];
console.log(fullStack) // [['HTML', 'CSS', 'JS', 'React', 'Redux'],['Node','Express', 'MongoDB']]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ['HTML', 'CSS', 'JS', 'React', 'Redux']
console.log(fullStack[1]) // ['Node','Express', 'MongoDB']
