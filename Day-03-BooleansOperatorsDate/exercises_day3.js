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