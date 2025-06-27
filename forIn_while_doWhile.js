//accessing keys and values using forIn
const user = {
    name: 'dev ed',
    age: 25,
    subscribers: 30000
}
for (const key in user) {
    console.log(key, user[key]);
}
console.log(user.subscribers);
console.log(user['subscribers'])
//print 20 to 29 using while loop
let i = 20
while (i < 30) {
    console.log(i)
    i++;
}
//print 0 to 9 using do while
let j = 0;
do {
    console.log(j);
    j++;
}
while (j > 10);