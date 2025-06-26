//switch is similar to if else if
let text = 'avacado';
switch (text) {
    case 'banana':
        console.log('you don\'t eat bananas right ?');
        break;
    case 'apple':
        console.log('a apple a day keeps the doctor away');
        break;
    case 'avacado':
        console.log('what kinda of fruit is dis?');
        break;
    default:
        console.log('tell me the fruit ');
        break;
}
// if(text === 'banana'){
//     console.log('you got me correct yep');
// }else if(text === 'apple'){
//     console.log('you just missed by a step');
// }
//prompting and writing fun fact
let userInput = prompt('tell me a fruit ?')
let convertedInput = userInput.toLowerCase()
switch (convertedInput) {
    case 'apple':
        alert('apples float :_:');
        break;
    case 'banana':
        alert('bananas are berries -_-');
        break;
    case 'avocado':
        alert('avocado has more potassium than banana *_*');
        break;
    default:
        alert('check spelling R unknown fruit to me');
        break;
}