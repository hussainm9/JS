document.title = 'DOM FUnz'
const tags = document.getElementsByTagName("h2");
const getClasses = document.getElementsByClassName('item')
const getElements = document.getElementById('submit')
// tags.push('item')//dom.js:3 Uncaught TypeError: tags.push is not a function
// console.log(tags, 'tags');//HTML COLLECTION - not an array it is a array look like
// console.log(getClasses, 'Classes');
// console.log(getClasses.length, 'Classes');
// console.log(getElements, 'Elements');
//---------------------------------------------------------------------------------
const querySelector = document.querySelector('h2#h2')
const querySelectorAll = document.querySelectorAll('h2')
const querySelectorClass = document.querySelectorAll('.item');
const querySelectorId = document.querySelector('#submit')
const listHeading = document.querySelector('h2.item')
const anchorInList = document.querySelector('#list a')


// console.log(querySelector, 'h2');
// console.log(querySelectorAll[0], 'h2');//nodelist
// console.log(querySelectorClass, '.list');
// console.log(querySelectorId, 'querySelectorId');
console.log(listHeading)
console.log(anchorInList);
