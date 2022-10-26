//For Loop
    //Structure
/*    for(initialization,condition,increment/decrement) {
        Code would be here.
    } */

    for(let i = 0;i<=5;i++) {
        console.log(i)
    }
    // 0 1 2 3 4 5

    for(let i = 5;i>=0;i--) {
        console.log(i)
    }
    // 5 4 3 2 1 0

    for(let i = 0; i <= 5; i++) {
        console.log(`${i} * ${i} = ${i*i}`);
    }

    const countries = [ 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland' ];
    const newArr = []

    for (let i = 0; i< countries.length; i++) {
        newArr.push(countries[i].toLocaleUpperCase());
    }
//Adding all elements in the array
    const numbers = [1,2,3,4,5]
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i] // can be shorten: sum += numbers[i]
    }

    console.log(sum) // 15

//Creating a new array based on the existing array
    const numBers = [1,2,3,4,5]
    const newArr0 = []
    let sum0 = 0

    for ( let i = 0; i < numBers.length; i++ ) {
        newArr.push( numBers[i] ** 2 )
    }

    console.log(newArr) // [1, 4, 9, 16, 25]

//---

const counTries = [ 'Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland' ];
const nuevoArray = []

for ( let i = 0; i < counTries.length; i++ ) {
    nuevoArray.push(counTries[i].toUpperCase())
}

console.log(nuevoArray); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

//While Loop
let i = 0
while (i<=5) {
    console.log(i)
    i++
}

// 0 1 2 3 4 5

//Do While Loop

i = 0
do {
    console.log(i)
    i++
} while (i <= 5)

// 0 1 2 3 4 5

//For Of Loop
/* We use for of loop for arrays. It is very hand way to iterate through an array if we are not
interested in the index of each element in the array. */
/*for (const element of arr) {
    //code goes here
} */

const numbers0 = [1,2,3,4,5];

for (const num of numbers0 ) {
    console.log('hello')
}

for (const num of numbers0) {
    console.log( num * num )
}

//Adding all the numbers in the array
let sum1 = 0
for ( const num of numbers ) {
    sum1 = sum1 + num 
        //can be also shorten like this: sum += num
    //after this we will use the shorter synthax(+=, -=, *=, /=, etc)
}
console.log(sum1)//15

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const tech of webTechs) {
    console.log(tech.toUpperCase())
}

for (const tech of webTechs) {
    console.log(tech[0]) //get only the first letter of each element, H C J R N M
}

const countries0 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArray = []
for(const country of countries) {
    newArray.push(country.toUpperCase())
}

console.log(newArray)

//Break
//Is used to interrupt a loop

for (let i = 0; i<=5; i++) {
    if(i==3){
        break
    }
    console.log(i)
}

// 0 1 2
//The above code stops if 3 found in the iteration process.

//Continue
//We use the keyword continue to skip a certain iterations.
for(leti=0;i<=5;i++){
    if(i==3){
        continue
    }
    console.log(i)
}

// 0 1 2 3 4 5
