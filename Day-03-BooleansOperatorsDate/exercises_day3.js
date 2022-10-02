//Exercises: Level 1
console.log( 'EXERCISES: LEVEL 1' );
    /* 1.- Declare firstName, lastName, country, city, age, isMarried, year variable and assign
    value to it and use the typeof operator to check different data types. */

        console.log( "1.- Declare firstName, lasName, country, city, age, isMarried, year vairiable and assign vlue to it and use typeof() to check different data types" );

        let firstName = "Diego";
        let lastName = 'Villasenor';
        let country = 'Mexico';
        let city = 'Zapopan';
        let age = 24;
        let isMarried = false;
        let year = 1998;

        console.log( 'Type of firstName is: ', typeof(firstName) );
        console.log( 'Type of lastName is: ', typeof(lastName) );
        console.log( 'Type of country is:  ', typeof(country) );
        console.log( 'Type of city is: ', typeof(city) );
        console.log( 'Type of age is: ', typeof(age) );
        console.log( 'Type of isMarried is:', typeof(isMarried) );
        console.log( 'Type of year is: ', typeof(year) );
    /* 2.- Check if type of  '10' is equal to 10   (==) */
        console.log( '2.-')
        console.log( '10' == 10 );
    /* 3.- Check if parseInt('9.8') is equal to 10 */
        console.log( '3.-' );
        console.log( parseInt('9.8') == 10 );
    /* 4.- Boolean value is either true or false.
        4.1.- Write three JavaScript statement which provide truthy value.
        4.2.- Write three JavaScript statement which provide falsy value. */
            console.log( "4.- Boolean value is either true or false. " );
            console.log('4.1.- Write three JavaScript statement which provide the truthy value. ');
            let truthy = 10 == 10;
            let truthy0 = 10 < 15;
            let truthy1 = 50 >= 15;
            console.log( '1.- ',truthy,'2.- ',truthy0,'3.- ', truthy1 );
            console.log( '4.2.- Write three JavaScript statement which provide the falsy value.' );
            let falsy = 10 >= 11;
            let falsy0 = 50 === '50';
            let falsy1 = 37 == 36;
            console.log( '1.- ', falsy, '2.- ', falsy0, '3.- ', falsy1 );
    /* 5.- Figure out the result of the following comparison expression first without using
    console.log(). After you decide the result confirm it using console.log() */
        let comparison = 4 > 3 
        console.log( '5.1.-The comparison: 4 > 3 should be true, and the result is: ', comparison );
        let comparison0 = 4 >= 3
        console.log( '5.2.-The comparison: 4>=3 should be true, and the result is: ', comparison0 );
        let comparison1 = 4 < 3
        console.log( '5.3.-The comparison: 4<3 should be false, and the result is: ', comparison1 );
        let comparison2 = 4 <= 3
        console.log( '5.4.-The comparison: 4<=3 should be false, and the result is: ', comparison2 );
        let comparison3 = 4 == 4
        console.log( '5.5.-The comparison: 4==4 should be true, and the result is: ', comparison3 );
        let comparison4 = 4 === 4
        console.log( '5.6.-The comparison: 4===4 should be true, and the result is: ', comparison4 );
        let comparison5 = 4 != 4
        console.log( '5.7.-The comparison: 4 != 4 should be false, and the result is: ', comparison5 );
        let comparison6 = 4 !== 4
        console.log( '5.8.-The comparison: 4 !== 4 should be false, and the result is: ', comparison6 );
        let comparison7 = 4 != '4'
        console.log( '5.9.-The comparison: 4 != "4" should be false, and the result is: ', comparison7 );
        let comparison8 = 4 == '4'
        console.log( '5.10.-The comparison: 4 == "4" should be true, and the result is: ', comparison8 );
        let comparison9 = 4 === '4'
        console.log( '5.11.-The comparison: 4 === "4" should be false, and the result is: ', comparison9 );
        console.log( '5.12.- Find the length of python and jargon and make a falsy comparison statement.' );

        let python = 'python';
        let jargon = 'jargon';
        console.log( 'the comparison: python.length != argon.length is: ', python.length != jargon.length );

        /* 6.- Figure out the result of the following expressions first without using console.log().
        After you decide the result confirm it by using console.log() */
        console.log( 'Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()' );
        let comPa = 4 > 3 && 10 < 12
        console.log( "6.1.- This comparison result should be true, and the result is: ", comPa );
        let comPa0 = 4 > 3 && 10 > 12
        console.log( "6.2.- This comparison result should be false, and the result is: ", comPa0 );
        let comPa1 = 4 > 3 || 10 < 12
        console.log( "6.3.- This comparison result should be true, and the result is: ", comPa1 );
        let comPa2 = 4 > 3 || 10 > 12
        console.log( "6.4.- This comparison result should be true, and the result is: ", comPa2 );
        let comPa3 = !(4>3)
        console.log( "6.5.- This comparison result should be false, and the result is: ", comPa3 );
        let comPa4 = !(4<3)
        console.log( "6.6.- This comparison result should be true, and the result is: ", comPa4 );
        let comPa5 = !(false)
        console.log( "6.7.- This comparison result should be true, and the result is: ", comPa5 );
        let comPa6 = !(4>3 && 10 < 12)
        console.log( "6.8.- This comparison result should be false, and the result is: ", comPa6 );
        let comPa7 = !(4 > 3 && 10 > 12)
        console.log( "6.9.- This comparison result should be true, and the result is: ", comPa7 );
        let comPa8 = !(4 === '4')
        console.log( "6.10.- This comparison result should be true, and the result is: ", comPa8 );
        console.log( "6.11.-There is no 'on' in both dragon and python " );
        let dragon = 'dragon';
        let dragOn = dragon.indexOf('on');
        let pythOn = python.indexOf('on');
        //console.log( 'This comparison should be false, and the result is:  ',dragOn && pythOn == -1 );
        console.log( 'This comparison should be false, and the result is:  ', dragon.indexOf('on') && python.indexOf('on') == false );
        /* 7.- Use the Date obect to do the following activities:*/
        console.log( '7.- Use the Date object to do the following activities: ' );
        const now = new Date();
        console.log( "7.1.- What is the year today? R= ", now.getFullYear() );
        console.log( "7.2.- What is the month today as a number?", now.getMonth() +1  );
        console.log( "7.3.- What is the date today?", now.getDate() );
        console.log( "7.4.- What is the day today as a number?", now.getDay() +1 );
        console.log( "7.5.- What is the hours now?", now.getHours() );
        console.log( "7.6.- What is the minutes now?", now.getMinutes() );
        console.log( "7.7.- Find out the numbers of seconds elapsed from January 1, 1970 to now.", now.getTime() );
    /* Exercises: Level 2 */
    console.log( 'Exercises: Level 2 ' );
        console.log( '1.- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (Area = 0.5 x b x h).' );
            let base = prompt( 'Type a random base of a triangle: ', 'Example: 15' );
            let height = prompt( 'Now type a random height of a triangle: ', 'Example: 20' );
            base = parseInt(base);
            height = parseInt(height);
            let result = 0.5 * base * height;
            let theConfirmation = confirm( `The area of your triangle is: ${result} `  );
    
        console.log( "2.- Write a script that prompt the user to enter side a, side b, and side c of the triangle and calculate the perimeter of a triangle (perimeter = a + b + c)" );
            let sideA = prompt('Enter side A: ', '5');
            let sideB = prompt('Enter side B: ', '4');
            let sideC = prompt('Enter side C: ', '3');
            sideA = parseInt(sideA);
            sideB = parseInt(sideB);
            sideC = parseInt(sideC);
            let trianglePerimeter = sideA + sideB + sideC;
            confirm( `The perimeter of the triangle is ${trianglePerimeter}` );
        console.log( '3.- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))' );
            let length = prompt( 'Enter length: ', '10' );
            let width = prompt('Enter width: ','15');
            length = parseInt(length);
            width = parseInt(width);
            let rectangleArea = length * width;
            let rectanglePerimeter = 2 * (length + width);
            confirm(`The area of your rectangle is: ${rectangleArea}, and the perimeter is: ${rectanglePerimeter}.`);
        console.log('4.- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.');
            const pi = 3.14
            let radius = prompt('Enter the radius of a circle: ', '7');
            let circleArea = pi * radius * radius;
            confirm(`The area of your circle is ${circleArea}.`);
        console.log('5.- Calculate the earring, the interseccion x and the interseccion y of y = 2x -2');
        
