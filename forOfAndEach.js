//accessing element in for of  and break keyword
const names = ['mickey', 'barbie', 'hulk', 'devEd', 'tool']
for (const name of names) {
    if (name === 'barbie') {
        break;
    }
    console.log(name, names.indexOf(name));

}
//accessing element in for each and break keyword
names.forEach(function (name, i) {
    // if (name === 'barbie') {    //illegal break and continue
    //     continue;
    // }
    console.log(name, '-', i);
})