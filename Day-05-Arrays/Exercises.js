//Exercises: level 1
const counTries00 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const webTechs00 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
    //EX-1
    const emptyArray = [];

    //EX-2
    let moreThanFive = new Array(6);
    moreThanFive = ["Element1","Element2","Element3","Element4","Element5","Element6",];
    console.log(moreThanFive);

    //EX-3
    console.log(moreThanFive.length);

    //EX-4
    let firstItem = moreThanFive[0];
    let middleItem = moreThanFive[3];
    let lastItem = moreThanFive[moreThanFive.length -1];
    let theThreeItems = [firstItem,middleItem,lastItem];
    console.log(theThreeItems);

    //EX-5
    const mixedDataTypes = [1,'two',3.5,"four",false,undefined,[true,null]];
    console.log(mixedDataTypes);

    //EX-6
    let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
    
    //EX-7
    console.log(itCompanies);

    //EX-8
    console.log(itCompanies.length);

    //EX-9
    console.log(itCompanies[0],itCompanies[3],itCompanies[itCompanies.length-1]);

    //EX-10
    console.log(itCompanies[0]);
    console.log(itCompanies[1]);
    console.log(itCompanies[2]);
    console.log(itCompanies[3]);
    console.log(itCompanies[4]);
    console.log(itCompanies[5]);
    console.log(itCompanies[6]);

    //EX-11
    itCompanies[0]=itCompanies[0].toUpperCase();
    itCompanies[1]=itCompanies[1].toUpperCase();
    itCompanies[2]=itCompanies[2].toUpperCase();
    itCompanies[3]=itCompanies[3].toUpperCase();
    itCompanies[4]=itCompanies[4].toUpperCase();
    itCompanies[5]=itCompanies[5].toUpperCase();
    itCompanies[6]=itCompanies[6].toUpperCase();

    console.log(itCompanies);

    //EX-12
    itCompanies[0]=itCompanies[0].toLowerCase();
    itCompanies[1]=itCompanies[1].toLowerCase();
    itCompanies[2]=itCompanies[2].toLowerCase();
    itCompanies[3]=itCompanies[3].toLowerCase();
    itCompanies[4]=itCompanies[4].toLowerCase();
    itCompanies[5]=itCompanies[5].toLowerCase();
    itCompanies[6]=itCompanies[6].toLowerCase();
    let sentence = `${itCompanies.slice(0,6)} and ${itCompanies[itCompanies.length-1]} are big IT companies`;
    console.log(sentence);

    //EX-13
    let checking = 'facebook';
    itCompanies.includes(checking) === true
    ? console.log(`Company found. It is: ${itCompanies[itCompanies.indexOf(checking)]}`)
    : console.log('A company is not found');

    //EX-14
    const moreThanOneO = [];

    if (itCompanies[0].indexOf('o') > -1 && itCompanies[0].indexOf('o') != itCompanies[0].lastIndexOf('o')) {
        moreThanOneO.push(itCompanies[0])
    }
    if (itCompanies[1].indexOf('o') > -1 && itCompanies[1].indexOf('o') != itCompanies[1].lastIndexOf('o')) {
        moreThanOneO.push(itCompanies[1])
    }
    if (itCompanies[2].indexOf('o') > -1 && itCompanies[2].indexOf('o') != itCompanies[2].lastIndexOf('o')) {
        moreThanOneO.push(itCompanies[2])
    }
    if (itCompanies[3].indexOf('o') > -1 && itCompanies[3].indexOf('o') != itCompanies[3].lastIndexOf('o')) {
        moreThanOneO.push(itCompanies[3])
    }
    if (itCompanies[4].indexOf('o') > -1 && itCompanies[4].indexOf('o') != itCompanies[4].lastIndexOf('o')) {
        moreThanOneO.push(itCompanies[4])
    }
    if (itCompanies[5].indexOf('o') > -1 && itCompanies[5].indexOf('o') != itCompanies[5].lastIndexOf('o')) {
        moreThanOneO.push(itCompanies[5])
    }
    if (itCompanies[6].indexOf('o') > -1 && itCompanies[6].indexOf('o') != itCompanies[6].lastIndexOf('o')) {
        moreThanOneO.push(itCompanies[6])
    }

    console.log(moreThanOneO);

    //EX-15
    itCompanies.sort()
    console.log(itCompanies);

    //EX-16
    itCompanies.reverse()
    console.log(itCompanies);

    //EX-17
    console.log(itCompanies.slice(3,8));

    //EX-18
    console.log(itCompanies.slice(0,4));

    //EX-19
    console.log(itCompanies.slice(0,3).concat(itCompanies.slice(4,8)));

    //EX-20
    itCompanies.shift();
    console.log(itCompanies);

    //EX-21
    itCompanies = itCompanies.slice(0,2).concat(itCompanies.slice(4,6));
    console.log(itCompanies);

    //EX-22
    itCompanies.pop();
    console.log(itCompanies);

    //EX-23
    itCompanies = itCompanies.splice();
    console.log(itCompanies);

//Exercises: Level 2
    //EX-1
    const {countries} = require('./countries.js');
    const {webTechs} = require('./web_techs.js')
    
    console.log(countries)
    console.log(webTechs)
    
    //EX-2
    let regex = /[,.]/g
    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
    text= text.replace(regex,'');
    text = text.split(' ');
    console.log(text.length);

    //EX-3
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
    console.log(shoppingCart); 
        //3.1
        if (shoppingCart.includes('Meat') === false) {
            shoppingCart.unshift('Meat');
        }
        //3.2
        if (shoppingCart.includes('Sugar')=== false) {
            shoppingCart.push('Sugar');
        }
        //3.3
        let honeyAlergic = true;
        if (honeyAlergic == true) {
            shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
        }
        console.log(shoppingCart);
        //3.4
        shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
        console.log(shoppingCart);
    //EX-4
    if (countries.includes('Ethiopia') === true) {
        console.log(countries[countries.indexOf('Ethiopia')].toUpperCase());
    } else {
        countries.push('Ethiopia');
        console.log(countries);
    }
    //EX-5
    webTechs.includes('Sass') == true
    ? console.log('Sass is a CSS preprocess')
    : webTechs.push('Sass');
    console.log(webTechs);

    //EX-6
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    const fullStack = frontEnd.concat(backEnd);
    console.log(fullStack);

//Exescises: Level 3
    //EX-1
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
        //1.1
        ages.sort()
        console.log(ages)
        console.log(`Te minimum age is ${ages[0]} and the maximum is ${ages[ages.length -1]}`);
        //1.2
        let medianItem = ages[ages.length / 2]
        console.log(medianItem)
        let medianAge = medianItem / 2;
        console.log(ages.length);
        console.log(`The median age is ${medianAge}`);
        //1.3
        let agesSum = ages.reduce((a,b)=>a+b,0)
        console.log(agesSum);
        let averageAge = agesSum / 10;
        console.log(`The average age is ${averageAge}`);
        //1.4
        let rangeOfAges = ages[ages.length -1] - ages[0];
        console.log(`The range of the ages is ${rangeOfAges}`);
        //1.5
        let value1 = ages[0] - averageAge;
        let value2 = ages[ages.length-1] - averageAge;
        console.log(Math.abs(value1),Math.abs(value2));
    //EX-2
    console.log(countries.slice(0,10));
    //EX-3
    let middleCountry = countries[Math.round((countries.length - 1) / 2)];
    console.log(middleCountry);
    //EX-4

    if (countries.length % 2 === 0) {
        const firstCountries = countries.slice(0,((countries.length/2)))
        const secondCountries = countries.slice(((countries.length/2)),countries.length)
        console.log(firstCountries,secondCountries)
    } else {
        const firstCountries =countries.slice(0,(Math.round(countries.length/2)))
        const secondCountries = countries.slice((Math.round(countries.length/2)),countries.length);
        console.log(firstCountries,secondCountries)
    }