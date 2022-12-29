const {countries} = require('./countries.js');
const {webTechs} = require('./web_techs.js');
const {mernStack} = require('./mern_stack.js');

//Exercises: Level 1
    //EX-1
    console.log('For')
    for(let i = 0; i<=10;i++){
        console.log(i)
    }
    console.log('While')
    let i = 0;
    while(i<=10){
        console.log(i)
        i++
    }
    console.log('Do While')
    i=0
    do {
        console.log(i)
        i++
    } while(i<=10);
    //EX-2
    console.log('For')
    for(let i = 10; i>=0;i--){
        console.log(i)
    }
    console.log('While')
    i = 10;
    while(i>=0){
        console.log(i)
        i--
    }
    console.log('Do While')
    i=10
    do {
        console.log(i)
        i--
    } while(i>=0);
    //EX-3
    console.log('0 to n');
    let n = 50;
    for(i=0;i<=n;i++) {
        console.log(i)
    }
    //EX-4
    for(let patt = '#';patt.length<=7;patt+='#'){
        console.log(patt)
    }
    //EX-5
    for(i=0;i<=10;i++){
        console.log(i,' x ', i, ' = ', i*i);
    }
    //EX-6
    for(i=0;i<=10;i++){
        console.log(i,' ',i*i,' ',i*i*i)
    }
    //EX-7-- Only EVEN numbers
    for(i=0;i<=100;i++){
        if(i%2==0){
            console.log(i)
        }
    }

    for(i=0;i<=100;i++){
        if(i%2!=0){
            continue
        }
        console.log(i)
    }
    //EX-8-- only ODD numbers
    for(i=0;i<=100;i++){
        if(i%2==0){
            continue
        }
        console.log(i)
    }
    //EX-9-- Only PRIME numbers
    for(i=0;i<=100;i++){
        let flag = 0;

        for(let j=2;j<i;j++) {
            if(i%j==0){
                flag=1;
                break;
            }
        }
        if (i>1&& flag==0){
            console.log(i)
        }
    }
    //EX-10
    let sum = 0;
    for (i=0;i<=100;i++) { 
        console.log(i)
        sum += i;
     }
     console.log(sum);
     //EX-11
     let sumEvens = 0;
     let sumOdds = 0;
     for(i=0;i<=100;i++) {
        console.log(i);
        if ( i%2 == 0 ) {
            sumEvens += i;
        }
        if ( i%2 != 0 ) {
            sumOdds += i;
        }
     }
     console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`)
     //EX-12
     sumEvens = 0;
     sumOdds = 0;
     for(i=0;i<=100;i++) {
        if ( i%2 == 0 ) {
            sumEvens += i;
        }
        if ( i%2 != 0 ) {
            sumOdds += i;
        }
     }
     const sumArray = []
     sumArray.push(sumEvens);
     sumArray.push(sumOdds);
     console.log(sumArray);
     //EX-13
     const fiveRandom = []

     while (fiveRandom.length < 5) {
        let ranNum = Math.ceil((Math.random())*10);
        fiveRandom.push(ranNum);
     }
     console.log(fiveRandom);
     //EX-14
     const fiveUniqueRandom = []

     while (fiveUniqueRandom.length < 5) {
        let ranNum = Math.ceil((Math.random())*10);
        if (fiveUniqueRandom.includes(ranNum) == true) {
            continue
        } else {
            fiveUniqueRandom.push(ranNum);
        }
     }
     console.log(fiveUniqueRandom);
     //EX-15
     let ranId = '';
     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     let characterLength = characters.length;
     let hexaChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
     let hexaCharLength = hexaChar.length;
     
     do {
        let ranNum = Math.floor((Math.random())*characterLength);
        ranId += characters.charAt(ranNum);
     } while (ranId.length < 6);

     console.log('Random 6 characters ID: ',ranId);
//Exercises: level 2
     //EX-1
     ranId = '';
     let ranLength = Math.ceil((Math.random())*characterLength);

     do {
        let ranNum = Math.floor((Math.random())*characterLength);
        ranId += characters.charAt(ranNum);
     } while (ranId.length < ranLength);
     
     console.log('Random ID with a random length: ',ranId);
     //EX-2
     let ranHex = '';
     
     do {
        let ranNum = Math.floor((Math.random())*hexaCharLength);
        ranHex += hexaChar.charAt(ranNum);
     } while (ranHex.length < 6);

     console.log('Random hexadecimal color: ','#'+ranHex);
     //EX-3
     let RGBcolor = []

     for (i=0;i<3;i++) {
        let ranRGB = Math.floor((Math.random())*255);
        RGBcolor.push(ranRGB)
     }

     let RGBcolorStructure = ['rgb(',RGBcolor[0],RGBcolor[1],RGBcolor[2],')'];
     let theRcolor = RGBcolorStructure.join();
     let inOfFiCo = theRcolor.indexOf(',');
     let inOfLaCo = theRcolor.lastIndexOf(',');
     theRcolor = theRcolor.substring(0,inOfFiCo) + theRcolor.substring(inOfFiCo+1,inOfLaCo)+theRcolor.substring(theRcolor.length-1);
     console.log(theRcolor);

     //EX-4

     for(i=0;i<countries.length;i++){
        countries[i] = countries[i].toUpperCase()
     }

     console.log(countries);

     //EX-5

     let countrieLength = [];
     for (i=0;i<countries.length;i++) {
        countrieLength.push(countries[i].length)
     }
     console.log(countrieLength);

     //EX-6

     let arrOfCountries = [];

     for (i=0;i<countries.length;i++) {
        arrOfCountries[i] = countries[i] +  countries[i].slice(0,3) + countrieLength[i];
     }

     console.log(arrOfCountries);