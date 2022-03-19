const pi = Math.PI;

//console.log(pi);
//console.log(Math.round(pi));
    //Random number
let ranNum = Math.random();
let numBeZeTen = ranNum * 10;
let numBeZeTenFloor = Math.ceil(numBeZeTen);
console.log(numBeZeTenFloor);
    //Concatenation:
let name = "Diego";
let lastName = "Villaseñor";
let age = "23 años";
let space = " ";
let user = name + space + lastName +  space + age;
console.log(user)
    //Escape sequences in strings
/*let n = "New\nline\n";
let t = "Tab \t means \t 8 spaces\n";
let bs = "Back \\ slash\n";
let sq = "Single \' quote\n";
let db = "Double \" quote\n";

console.log(n + t + bs + sq + db); */

    //Injecting data
let d = 5;
let f = 78;

let expression = `The sum of ${d} and ${f} is ${d + f}`; //To inject data is required to use ´´ quotes
console.log(expression);

let t = 2;
let th = 3;
console.log( `${t} is greather than ${th}: ${t>th}` );
    //string methods
    //length:
let js = "JavaScript";
console.log( js.length ) //This will returns the number of characters of the string
    //Accesing  characters in a string:
let hey = "HelloWorld";
let firstLetter = hey[0]; //To access a character, we write the name of the variable and the index of the character inside of []. Example: variable[3]
console.log(firstLetter);
console.log(hey[5]);
    //ToUpperCase():
console.log(hey.toUpperCase());
let minusc = "i am a sentence in lowercase";
let uppCase = minusc.toUpperCase();
console.log(uppCase);
    //toLowerCase():
console.log(uppCase.toLowerCase());