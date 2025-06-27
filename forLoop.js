// printing 1 to 100
for (let i = 0; i <= 100; i++) {
    console.log(i);
}
//escape 20 and continue
for (let i = 0; i <= 100; i++) {
    if (i === 20) {
        console.log('you hit 20');
        continue
    }
    console.log(i);
}
//end at 40 and outside code runs after 40
for (let i = 0; i <= 100; i++) {
    if (i === 40) {
        console.log('you hit 40');
        break;
    }
    console.log(i);
}
console.log('iam outside of loop');
//array eg
const texts = ['walking', 'running', 'jogging', 'stretching', 'skimming']
for (let i = 0; i < texts.length; i++) {
    console.log(texts[i]);
}
//string eg
let text = 'ground_water_recharge';
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}