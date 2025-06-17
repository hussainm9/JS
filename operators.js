// operators
let inbox = 10;
console.log(inbox + 20);
console.log(inbox - 2);
console.log(inbox * 5);
console.log(inbox /4); //2.5
console.log(inbox % 6); // 4
console.log(inbox ** 2);

inbox++ // inbox = inbox +1 
console.log(inbox);
inbox--;
console.log(inbox);
inbox += 20;//inbox = inbox + 20
console.log(inbox);

// prefix and postfix for increment operator
let emails = 10;
let a  = ++emails;
let b = emails++;
console.log(a);//11 (add first then tell me the value)
console.log(b);//11 (first tell me the value then add )
console.log(emails);//12