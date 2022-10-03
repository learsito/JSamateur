//let naMe = prompt('Enter name','Diego');
//console.log(naMe.length)

const now = new Date();
let year= now.getFullYear()
let month = now.getMonth() + 1
let day = now.getDate()
let hour = now.getHours()
let minute = now.getMinutes()

day < 10 ? day = '0'+ day : day = day;
month < 10 ? month = '0' + month : month = month;
day < 10 ? day = '0'+ day : day = day;
month < 10 ? month = '0' + month : month = month;
hour < 10 ? hour = '0' + hour : hour = hour;
minute < 10 ? minute = '0' + minute : minute = minute;

console.log(`1.- ${year}-${month}-${day}    ${hour}:${minute}`);
console.log(`2.- ${day}-${month}-${year}    ${hour}:${minute}`);
console.log(`3.- ${day}/${month}/${year}    ${hour}:${minute}`);