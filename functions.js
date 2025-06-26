//functions will execute until we invoke
//variables have access in the function curly brackets only
//one function can call and pass data to other function as an argument 
function greet(text) {
    console.log('welcome to our webiste ' + text);
}
console.log('rest of the code');
function signUp() {
    let name = prompt('enter your name')
    greet(name)

}

//
///
signUp()
//functions with return and without return
let nr = Math.max(1, 6)
console.log(nr);
let tnr = console.log('hi')
console.log(tnr);
//setting default parameters in funtions
function max(nr1 = 0, nr2 = 0) {
    if (nr1 > nr2) {
        return nr1
    } else {
        return nr2
    }
}
let inbox = max(20, 3)
console.log(inbox);