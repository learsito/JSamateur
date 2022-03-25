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
    //substr():
let string = 'JavaScript';
console.log(string.substr(4,6)); // It takes two arguments, the starting index and number of characters to slice.
    //substring():
let sTring = 'JavaScript';
console.log( sTring.substring(0,4) );
console.log( sTring.substring(4,10) ); // It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
    //split(): The split method splits (divide) a string at a specified place.
let stringg = '30 Days Of JavaScript';
console.log( stringg.split() ); // Changes to an array -> ["30 Days Of JavaScript"]
console.log( stringg.split(' ') );  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh';
console.log( firstName.split() ); // Change to an array - > ["Asabeneh"]
console.log(firstName.split('')); // Split to an array at each letter -> ["A", "s", "a", "b", "e","n","e","h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland';

console.log( countries.split(',') ); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log( countries.split(', ') ); // ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

    // trim(): Removes trailing space in the beginning or the end of a string.
let string0 = '   30 Days Of Javacript   ';
console.log( string0 );
console.log( string.trim(' ') );

let firstNamE = '       Asabeneh        ';
console.log( firstNamE );
console.log( firstNamE.trim() ) // Still removes spaces at the beginning and the end of the string

    //includes(): It takes a substring argument and it checks if substring argument
                            //exists in the string. includes() returns a boolean. If a substring
                            //exist in a string, it returns true, otherwise it returns false.
let string3 = '30 Days Of JavaScript';

console.log(string3.includes('Days'))     // true
console.log(string3.includes('days'))     // false - it is case sensitive!
console.log(string3.includes('Script'))   // true
console.log(string3.includes('script'))   // false
console.log(string3.includes('java'))     // false
console.log(string3.includes('Java'))     // true

    //replace(): takes as a parameter the old substring and a new substring
let string4 = '30 Days Of JavaScript';
console.log(string4.replace('JavaScript','Python'));

let country2 = 'Finland';
console.log(country2.replace('Fin','Noman'));

    //  charEt(): Takes index and it returns the value at that index
let string5 = '30 Days Of JavaScript';
console.log(string5.charAt(0));

let lastIndex = string5.length - 1;
console.log(string5.charAt(lastIndex));

    // charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
    //(Idea para una web)
let string6 = '30 Days Of JavaScript';
console.log(string6.charCodeAt(3));

let lastIndex0 = string.length - 1;
console.log(string.charCodeAt(lastIndex0));

    //indexOf(): Takes a substring and if the substring exist in a string it returns the first position of the substring, if does no exist it returns -1
let string7 = '30 Days Of JavaScript';
console.log(string7.indexOf('D'));
console.log(string7.indexOf('Days'));
console.log(string7.indexOf('days'));
console.log(string7.indexOf('a'));
console.log(string7.indexOf('JavaScript'));
console.log(string7.indexOf('Script'));
console.log(string7.indexOf('script'));