//single equal to
const name = 'maimbo';
//double equal to
console.log(5 == 5);//true
console.log(5 == 10);//false
//not equal to 
console.log(10 != '10'); //false (js internally converts string of 10 to number 10 )
console.log(20 != 10); //true
//bigger than
console.log(10 > 20);//false
console.log(10 > '9'); //true
//smaller than
console.log(10 < '10'); //false
console.log(2 < 8); //true
//bigger than equals to 
console.log(10 >= 10);//true
//smaller than equals to 
console.log(2 <= 2);//true
//triple equals
console.log(10 == '10');//true 
console.log(10 === '10');//false checks type and value
//NEVER EVER USE DOUBLE EQUALS USE TRIPLE EQUALS;
//condItions
const access = false
const age = 20
const bank = 40;
if (access) {
    console.log('you have access');
} else {
    console.log('you are not enough old');
}
if (age >= 20) {
    console.log('you have access');
} else {
    console.log('you are not enough old');
}
//&& || !
if (age >= 20 && bank > 50) {
    console.log('you have access');
} else if (bank > 30) {
    console.log('you have enough money');

} else {
    console.log('you are not enough old');
}



