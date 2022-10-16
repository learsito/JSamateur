//Conditionals
/* Conditional statements are used for make decisions based on different conditions.
By default, statements in JavaScript script executed sequentially from top to bottom. */
    //if
    /* In JavaScript and other programming languages the key word 'if' is used to check if
    a contition is true and to execute the block code. To create an if condition, we need
    if keyword, condition inside a parenthesis and block of code inside a curly bracket({}). */

//    Sintáxis:
if (condicion) {
    //Esta parte del código se ejecuta si la condición resulta verdadera verdadera.
} else {
    //Esta parte del código se ejecuta si la condición resultó falsa.
}

//------------

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number

//------------

l