//a list of something
//how to define and how to access values 
//typeof and methods
const users = ['Dev Ed', 'John', 'John snow', 'You']
// console.log(users[2]);
console.log(typeof users);
users.pop()
console.log(users);
users.push('NEW')
console.log(users);
users.shift()
console.log(users);
users.unshift('max')
console.log(users);
console.log(users.length);

console.log(users.indexOf('John snow'));