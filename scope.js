//global scope
let name = 'apple'
let fruits = 5
var y = 50;
console.log(name, fruits);

//function scope
function test() {
    // let name = 'banana'
    // let fruits = 9
    console.log(name, fruits);
    // console.log(fruit);//ReferenceError: fruit is not defined
}
test()

for (let fruit = 0; fruit < 10; fruit++) {
    console.log(fruit);
    var y = 100;
}
console.log(y, 'y');