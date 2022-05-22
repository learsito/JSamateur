//Exercise: Level 1
    console.log( "\n                               Exercises - Level 1:\n" );
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
    //21.- Use startsWith() method with the string 30 Days Of JavaScript and make the result true.
        console.log( '21.- ', challenge.startsWith('30') );
    //22.- Use endsWith() method with the string 30 Days Of JavaScript and make the result true.
        console.log( '22.- ', challenge.endsWith('JavaScript') );
    //23.- Use match() method to find all the a’s in 30 Days Of JavaScript.
        console.log( '23.- ', challenge.match('a') );
    //24.- Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'.
        let thirtyD = '30 Days Of ';
        let JS = 'JavaScript';
        console.log( '24.- ', thirtyD.concat( JS ) );
    //25.- Use repeat() method to print 30 Days Of JavaScript 2 times.
        let numY = 2;
        console.log( '25.- ', challenge.repeat( numY ) );
//Execise: Level 2
    console.log( "\n                               Exercises - Level 2:\n" );
    console.log( "Exercises level two:" );
    //1.- Using console.log() print out the following statement:
        let quoteHolmes = " The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes Teaches us to help one another. ";
        console.log( "1.- ", quoteHolmes );
    //2.- Using console.log() print out the following quote by Mother Teresa:
        let quoteTeresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
        console.log( "2.- ", quoteTeresa );
    //3.- Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
        let tenString = '10';
        let tenNum = 10;
        if (tenString === tenNum) {
            console.log( tenString === tenNum );
        } else {
            console.log( "3.- ", parseInt(tenString) === tenNum );
        }
    //4.- Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
        let nineDotEight = '9.8';
        if ( parseFloat(nineDotEight) == tenNum ) {
            console.log( parseFloat(nineDotEight) == tenNum );
        } else {
            let nineFloat = parseFloat(nineDotEight);
            console.log( "4.- ", Math.round(nineFloat) == tenNum );
        }
    //5.- Check if 'on' is found in both python and jargon.
        let python = 'Python';
        let jargon = 'Jargon';
        console.log( "5.- ", python.includes('on') == jargon.includes('on') );
    //6.- I hope this course is not full of jargon. Check if jargon is in the sentence.
        let jargonSentence = "I hope this course is not full of jargon.";
        console.log( "6.- ", jargonSentence.includes('jargon') );
    //7.- Generate a random number between 0 and 100 inclusively.
        let ranNum = Math.random();
        let numBeZeTen = ranNum * 100;
        let numBeZeTenFloor = Math.ceil(numBeZeTen);
        console.log( "7.- ", numBeZeTenFloor);
    //8.- Generate a random number between 50 and 100 inclusively.
        let ranDom = Math.random();
        let fifTy = ranDom * (100 - 50) + 50;
        let raRanDom = Math.ceil(fifTy);
        console.log( "8.- ", raRanDom); 
    //9.- Generate a random number between 0 and 255 inclusively.
        let renDom = Math.random();
        let twoHun = renDom * 255;
        let twHnum = Math.ceil(twoHun);
        console.log( "9.- ", twHnum );
    //10.- Access the 'JavaScript' string characters using a random number.
        let Js = "JavaScript";
        let rn = Math.random();
        let los = rn * Js.length;
        let insT = Math.floor(los);
        console.log( "10.-", Js[insT] );
    //11.- Use console.log() and escape characters to print the following pattern.
        console.log( "11.- \n1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125" );
    //12.- Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
        console.log( "12.- ", because.substr(31,23) );
//Exercises: Level 3
    console.log( "\n                               Exercises - Level 3:\n" );
    console.log( "Exercises level three:" );
    //1.- 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
        let love = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
        let lovAr = love.match(/Love/gi);
        let lovLen = lovAr.length; 
        console.log( "1.- ", lovLen );
    //2.- Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
        let becAr = because.match(/because/gi);
        let becLen = becAr.length;
        console.log('2- ', becLen);
    //3.- Clean the following text and find the most frequent word (hint, use replace and regular expressions).
    const sentence = 'I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher? This 30 Days Of JavaScript is also the result of love of teaching';
    console.log( "3.- ", sentence);