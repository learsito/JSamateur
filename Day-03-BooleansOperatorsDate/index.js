//Booleans
    /*A boolean data type represents one of the two values: true or false. 
    Boolean value is either true or false. The use of these data types will be  
    clear when you start the comparison operator. Any comparisons return a 
    boolean value which is either true or false. */

    //Example: Boolean Values

    let isLightOn = true;
    let isRaining = false;
    let isHungry = false; 
    let isMarried = true; 
    let trueValue = 4 > 3;  // true
    let falseValue = 4 < 3;  //false

    // We agreed that boolean values are either true or false.

        // Truthy values
            
            /* All numbers (positive and negative) are truthy except zero
                 All strings are truthy except an empty string ('')
                 The boolean true */

        // Falsy values 

            /* 0
                 On
                 null
                 undefuned
                 NaN
                 the boolean false
                 '', "", ``, empty string */

    /* It is good to remember those truthy values and falsy values.
         In later section, we will use them with conditions to make decisions. */
 
//Undefined

    /* If we declare   a variable and if we do not assign a value, the value will be undefined.
         In addition to this, if a function is not returning the value, it will be undefined */

    let firstName;
    console.log(firstName); //not defined, cuz it is not assigned to a value yet.

//NULL

    let empty = null;
    console.log(empty); // -> null, means no value.

//Operators
    //Assignment operators.
        /* An equal sign in JavaScript is an assignment operator. It uses to assign a variable. */

        let firstNam =  'Diego';
        let country = 'Mexico';

        //Assignment Operators 
            /* Operator:        Example:            Same as:      Description:
                    =                           x = y                       x = y               y is stored in x
                    +=                      x += y                      x=x+y               x + y result is stored in x
                    -=                       x-=y                       x=x-y               x - y result is stored in x                      
                    *=                      x*=y                        x=x*y               x * y result is stored in x
                    /=                      x/=y                        x=x/y               x / y result is stored in x                                                                    
                    %=                      x%=y                        x=x%y               x % y result is stored in x                                                                            
                    **=                     x**=y                      x=x**y            x ** y result is stored in x      */
        //Arithmetic Operators
        /* Arithmetic operators are mathematical operator.
            1.- Addition(+): a+b
            2.- Subtraction(-): a-b
            3.- Multiplication(*): a*b
            4.- Division(/): a/b
            5.- Modulus(%): a %b
            6.- Exponential(**): a ** b */

            let numOne = 4;
            let numTwo= 3;
            let sum = numOne + numTwo;
            let diff = numOne - numTwo;
            let mult = numOne * numTwo;
            let div = numOne / numTwo;
            let remainder = numOne % numTwo;
            let powerOf = numOne ** numTwo;

            console.log(sum, diff, mult, div, remainder, powerOf); //  7, 1, 12, 1.33, 64

            const PI = 3.14;
            let radius = 100;           //length in meter

            //Let us calculate area of a circle
            const areaOfCircle = PI * radius * radius;
            console.log(areaOfCircle); //       314 m

            const gravity = 9.81        // in m/s2
            let mass = 72                       // in Kilogram

            // Let us calculate Weight of an object
            const weight = mass * gravity;
            console.log(weight);        //706.32 N(Newton)

            const boilingPoint = 100 //temperature in oC, boiling point of water
            const bodyTemp = 37            //body temperature in oC

            //Concatenating string with numbers using string interpolation
            /*
                The boiling point of water is 100 oC.
                HUman body temperature is 37 oC.
                The gravity of earth is 9.81 m/s2.
                */
               console.log(
                `The boiling point of water is ${boilingPoint} oC. \nHuman body temperature is ${bodyTemp} oC. \nThe gravity of earth is ${gravity} m / s2. `
               );

            //Comparison Operators
                /*  In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.
                
                            OPERATOR                                    NAME                                                 EXAMPLE
                                ==                                              Equal                                                 x == y
                                ===                                     Exactly equal                                      x === y
                                !=                                          Not equal                                             x != y
                                >                                       Greater than                                            x > y
                                <                                           Less than                                               x < y
                                >=                              Greater than or equal to                             x >= y
                                <=                              Less than or equal to                                    x <= y                      */

            //Example: Comparison Operators 
                
                    console.log(3 > 2);                                         //true, cause 3 is greater than 2
                    console.log(3 >= 2);                                       //true, cause 3 is grater than 2
                    console.log(3 < 2);                                         //false, cause cause 3 is grater than 2
                    console.log( 2 < 3 );                                       //true, cause 2 is less than 3
                    console.log( 2 <= 3 );                                      //  
                    console.log( 3 == 2 );                                      //
                    console.log( 3 != 2 );                                      //
                    console.log( 3 == '3' );                                    //
                    console.log( 3 === '3' );                                   //
                    console.log( 3 !== '3' );                                   //
                    console.log( 3 != 3 );                                          //
                    console.log( 3 !== 3 );                                         //
                    console.log( 0 == false );                                  //
                    console.log( 0 === false );                                 //
                    console.log( 0 == '' );                                         //
                    console.log( 0 == ' ' );                                            //
                    console.log( 0 === '' );                                            //
                    console.log( 1 == true );                                           //
                    console.log( 1 ===true );                                           //
                    console.log( undefined == null );                           //
                    console.log( undefined === null );                          //
                    console.log( NaN == NaN );                                          //
                    console.log( NaN === NaN );                                         //
                    console.log(  typeof NaN );                                         //

                    console.log( 'mango'.length == 'avocado'.length );  //
                    console.log( 'mango'.length != 'avocado'.length );  //
                    console.log( 'mango'.length < 'avocado'.length );   //
                    console.log( 'milk'.length == 'meat'.length );          //
                    console.log( 'milk'.length != 'meat'.length );          //
                    console.log( 'tomato'.length == 'potato'.length );//
                    console.log( 'python'.length > 'dragon'.length );   //

                    /* Try to understand the above comparisons with some logic. Remembering without any logic might be difficult. JavaScript is somehow a wired kind programming language.
                    JavaScript code run and give you a result but unless you are good at it may not be the desired result */

                    /* As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==. The following link has an exhaustic list of comparison
                    of data types: https://dorey.github.io/JavaScript-Equality-Table/ */

                    //Logical Operators:
                    /* The following symbols are the common logical operators: &&(ampersand), ||(pipe)> it means or {if and only if}, and !(negation). The && operator gets true only if the two operators are true.
                            The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.*/

                                    // && ampersand operator example:
                                    const check = 4 > 3 && 10 > 5; // true && true -> true
                                    const check0 = 4 > 3 && 10 < 5; // true && false -> false
                                    const check1 = 4 < 3 && 10 < 5; // false && false -> false

                                    // || pipe or operator, example:
                                    const check2 = 4 > 3 || 10 > 5; // true || true -> true
                                    const check3 = 4 > 3 || 10 < 5; //true || false -> true 
                                    const check4 = 4 < 3 || 10 < 5; // false || false -> false

                                    // ! negation examples:
                                    let check5 = 4 > 3;                                     //true
                                    let check6 = !(4 > 3);                               //false
                                    let IsLightOn = true;                             //
                                    let isLightOff = !IsLightOn;             //false
                                    let IsMarried = !false;                         //true