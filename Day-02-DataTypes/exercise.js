//Exercise: Level 1
    //1.- Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
        let challenge = '30 Days Of JavaScript';
        console.log("Exercises level one:");
        console.log( '1.- "Challenge" variable declared. ' )
    //2.- Print the string on the browser console using console.log()
        console.log( "2.-", challenge);
    //3.- Print the length of the string on the browser console using console.log()
        console.log( '3.- ', challenge.length);
    //4.- Change all the string characters to capital letters using toUpperCase() method
        console.log( '4.-', challenge.toUpperCase());
    //5.- Change all the string characters to lowercase letters using toLowerCase() method
        console.log( '5.-', challenge.toLowerCase());
    //6.- Cut (slice) out the first word of the string using substr() or substring() method
        console.log( '6.-', challenge.substr(0,1));
    //7.- Slice out the phrase Days Of JavaScript from 30 Days of JavaScript.
        console.log(  '7.-', challenge.substr(3,18) );
    //8.- Check if the string contains a word Script using includes() method.
        console.log( '8.- ', challenge.includes('Script') );
    //9.- Split the string into an array using split() method.
        console.log( '9- ', challenge.split() );
    //10.- Split the string 30 Days of JavaScript at the space using split() method.
        console.log( '10.- ', challenge.split( ' ' ) );
    //11.- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
        let techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
        let excEleven = techCompanies.split(',');
        console.log( '11.- ', excEleven);
    //12.- Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
        thirtyChall = challenge.replace( 'JavaScript','Python' );
        console.log( '12.- ', thirtyChall );
    //13.- What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
        console.log( '13.- ', challenge.charAt(15) );
    //14- What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
        console.log( '14.- ', challenge.charCodeAt(11) );
    //15.- Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript.
        console.log( '15.- ', challenge.indexOf('a') );
    //16.- Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
        console.log( '16.- ', challenge.lastIndexOf('a') );
    //17.-Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'. 
        let because = 'You cannot end a sentence with because because because is a conjunction';
        console.log('17.- ', because.indexOf('because') );
    //18.- Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
        console.log('18.- ', because.lastIndexOf('because') );
    //19.- Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
        console.log('19.- ', because.search('because'));
    //20.- Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
        let spaces = '          Do not let me with spaces          ';
        console.log( '20.- ', spaces.trim( ' ' ) );
    //21.- Use endsWith() method with the string 30 Days Of JavaScript and make the result true.
        console.log( '21.- ', challenge.endsWith('JavaScript') );