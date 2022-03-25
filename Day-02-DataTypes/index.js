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
    //lastIndexOf(): Takes a substring and if the substring exist in a string it returns the last position of the substring, if it does not exist it returns -1
let string8 = 'I love JavaScript. If you do not love JavaScript what else can you love';
console.log(string8.lastIndexOf('love'));
console.log(string8.lastIndexOf('you'));
console.log(string8.lastIndexOf('JavaScript'));
    //concat(): it takes many substrings and joins them.
let string9 = '30';
console.log(string9.concat("Days", "Of", "JavaScript"));
let country0 = "Fin";
console.log(country0.concat("land"));

    //startsWith(): it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean (true or false)
let string10 = 'Love is the best to in this world';
console.log(string10.startsWith('Love'));
console.log(string10.startsWith('love'));
console.log(string10.startsWith('world'));

let country1 = 'Finland';
console.log(country1.startsWith('Fin'));
console.log(country1.startsWith('fin'));
console.log(country1.startsWith('land'));
    //endsWith(): it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean (true or false).
let stringends = 'Love is the most powerful feeling in the world';
console.log(stringends.endsWith('world'));
console.log(stringends.endsWith('love'));
console.log(stringends.endsWith('in the world'));

let countryEnds = 'Finland';

console.log(countryEnds.endsWith('land'));
console.log(countryEnds.endsWith('fin'));
console.log(countryEnds.endsWith('Fin'));

    //search(): it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
let stringSearch = 'I love JavaScript. If you do not love JavaScript what else can you love.';
console.log(stringSearch.search('love'));
console.log(stringSearch.search(/javascript/gi));

    // match: it takes a substring or regular expression pattern as an argument and it returns an array if there is a match if not it returns null.
    // Let us see how a regular expression pattern looks like. It starts with / sign and ends tith / sign.

let stringMatch = 'love';
let patternOne = /love/;        // with out any flag
let patternTwo = /love/gi;   // g.means to search in the whole text, i - case insensitive
//Match syntax
let stringMatch0 = 'I love JavaScript. If you do love JavaScript what else can you love.';
console.log(stringMatch0.match('love'));

let pattern = /love/gi;
console.log(stringMatch0.match(pattern));
//Let us extract numbers from text using a regular expression. This is not the regular expression section, do not panic! We will cover regular expressions later on.

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge';
let regEx = /\d+/;
        // d with escape character means d not a normal d instead acts a digit
        // + means one or more digit numbers,
        // if there is g after that it means global, search everywhere.

console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));

    // repeat(): it takes a number as an argument and it returns the repeated version of the string.
let stringRepeat = 'love';
console.log(stringRepeat.repeat(10));

        //Checking Data Types and Casting
    //Checking Data Types: To check the data type of a certain variable we use the typeof method.
let firstName0 = 'Asabeneh';
let lastName0 = 'Yetayeh';
let cpuntry = 'Finland';
let city = 'Helsinki';
let age0 = 250;
let job;

console.log(typeof 'Asabeneh');
console.log(typeof firstName0);
console.log(typeof 10);
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof false);
console.log(typeof NaN);
console.log(typeof job);
console.log(typeof undefined);
console.log(typeof null);

        //Changing Data Type (Casting): Casting = Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
    //String to int:  We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', ect. We can convert string to number using the following methods:
    //parseInt()
let num = '10';
let numInt = parseInt(num);
console.log(numInt);
    //Number()
let num0 = '10';
let numInt0 = Number(num0);
console.log(numInt0);
    //Plus sign(+)
let num1 = '10';
let numInt1 = +num1;
console.log(numInt1);
        //String to Float: We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number : '9.81','3.14','1.44', etc. We can convert string float to number using the following methods:
    //parseFloat()
let float = '9.81';
let numFloat = parseFloat(float);
console.log(numFloat);
    //Number()
let float0 = '9.81';
let numFloat0 = Number(float0);
console.log(numFloat0);
    //Plus sign(+)
let float1 = '9.81';
let numFloat1 = +float1;
console.log(numFloat1);

        //Float to Int: We can convert float numbers to integers. We use the following method to convert float to int:
    //parseInt()
let float2 = 9.81;
let floatInt = parseInt(float2);
console.log(floatInt);

