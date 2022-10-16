//LVL-1
    //Ex-1

        let userAge = prompt('Enter your age');
        let yearsToWait

        if (userAge >= 18 ) {
            confirm("You are old enough to drive");
        } else {
            yearsToWait = 18 - userAge;
            confirm(`You are still too young to drive. You will have to wait ${yearsToWait}`)
        }

    //Ex-2

        let yourAge = prompt('Enter your Age');
        let myAge = prompt('My age is: ');
        let difference

        if (yourAge > myAge) {
            difference = yourAge - myAge;
            confirm(`You are ${difference} years older than me.`);
        } else if (yourAge < myAge) {
            difference = myAge - yourAge;
            confirm(`I am ${difference} years older than you`);
        } else {
            confirm('We have the same age.');
        }

    //Ex-3
        
        let a = 4
        let b= 3;

        if ( a > b ) {
            console.log('a is greater than b');
        } else {
            console.log('a is less than b');
        }

        a > b ? console.log('a is greater than b') : console.log('a is less than b');
        
    //Ex-4