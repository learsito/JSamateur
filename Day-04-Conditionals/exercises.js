//LVL-1
    //Ex-1

        let userAge = prompt('Enter your age');
        let yearsToWait

        if (userAge >= 18 ) {
            confirm("You are old enough to drive");
        } else if ( userAge < 18 ) {
            yearsToWait = 18 - userAge;
            confirm(`You are still too young to drive. You will have to wait ${yearsToWait}`)
        } else {
            confirm(`The entered value (${userAge}) is not a number or is not valid.`)
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
        } else if (myAge == yourAge) {
            confirm('We have the same age.');
        } else {
            confirm(`The entered value (${yourAge} &/or ${myAge}) is not a number or is not valid.`);
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

        let enterNumber = prompt('Enter a number');
        let remainder = enterNumber % 2;
        
        if (remainder == 0) {
            confirm(`${enterNumber} is an even number.`);
        } else if (remainder > 0 || remainder < 0 ) {
            confirm(`${enterNumber} is an odd number.`);
        } else {
            confirm(`The entered value (${enterNumber}) is not a number or is not valid`)
        }
//LVL-2
    //EX-1

        let score = prompt('Enter the score of the student...');

        if (score >= 80 && score <= 100) {
            confirm(`A`)
        } else if (score >= 70 && score <= 89) {
            confirm('B');
        } else if ( score >= 60 && score <= 69 ) {
            confirm('C');
        } else if ( score >= 50 && score <= 59 ) {
            confirm('D')
        } else if ( score >= 0 && score <= 49 ) {
            confirm('F');
        } else {
            confirm(`The entered value (${score}) is not a number or is not valid`);
        }

    //EX-2

        let month = prompt('Enter the month...');

        month = month.toLowerCase();

        if ( month == 'september' || month == 'october' || month == 'november' ) {
            confirm(`${month} is in Autumn.`);
        } else if ( month == 'december' || month == 'january' || month == 'february' ) {
            confirm(`${month} is Winter`);
        } else if (month == 'march' || month == 'april' || month == 'may' ) {
            confirm(`${month} is Spring`);
        } else if ( month == 'june' || month == 'july' || month == 'august' ) {
            confirm(`${month} is Summer`);
        } else {
            confirm(`The entered value (${month}) is not valid. Remember to write the month with the first letter in cappital.`);
        }

    //EX-3
        
        let today = prompt('What is the day today?');

        today = today.toLowerCase();

        if ( today == 'monday' || today == 'tuesday' || today == 'wednesday' || today == 'thursday' || today == 'friday' ) {
            confirm(`${today} is a working day.`);
        } else if ( today == 'saturday' || today == 'sunday' ) {
            confirm(`${today} is a weekend`);
        } else {
            confirm(`The entered value (${today}) is not valid. Remember to check orthography.`);
        }

//LVL-3
    //EX-1

        let theMonth = prompt('Enter a month');

        theMonth = theMonth.toLowerCase();

        if ( theMonth == 'january' || theMonth == 'march'|| theMonth == 'may'  || theMonth == 'july'  || theMonth == 'august' || theMonth == 'october' || theMonth == 'december'    ) {
            confirm(`There are 31 days in ${theMonth}`);
        } else if ( theMonth == 'april' || theMonth == 'june' || theMonth == 'september'  || theMonth == 'november' ) {
            confirm(`There are 30 days in ${theMonth}`);
        } else if ( theMonth == 'february' ) {
            confirm(`There are 28 days in ${theMonth}`);
        } else {
            confirm(`The entered value (${theMonth}) is not valid. Remember to check orthography.`);
        }

    //EX-2

        theMonth = prompt('Enter a month from a leap year...');

        theMonth = theMonth.toLowerCase()

        if ( theMonth == 'january' || theMonth == 'march'|| theMonth == 'may'  || theMonth == 'july'  || theMonth == 'august' || theMonth == 'october' || theMonth == 'december'    ) {
            confirm(`There are 31 days in ${theMonth}`);
        } else if ( theMonth == 'april' || theMonth == 'june' || theMonth == 'september'  || theMonth == 'november' ) {
            confirm(`There are 30 days in ${theMonth}`);
        } else if ( theMonth == 'february' ) {
            confirm(`There are 29 days in ${theMonth}`);
        } else {
            confirm(`The entered value (${theMonth}) is not valid. Remember to check orthography.`);
        }