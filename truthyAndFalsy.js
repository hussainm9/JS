//falsy values (false,0,'',undefined,null,NaN)
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(0));
//truthy values (except all falsy values)
console.log(Boolean(-2));
console.log(Boolean('Ed'));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(-0));//internally js knows it is zero so falsy value