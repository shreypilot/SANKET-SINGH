console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0*a"));
let x = NaN;
console.log(x == NaN);
console.log(isNaN(x));
console.log(isNaN("shreya"));//isNaN converts the incoming input to a number
console.log(Number.isNaN(x));
console.log(Number.isNaN("sanket"));
if(typeof(x) == 'number' && x != x){
    console.log(true)
}
console.log(x!=x);


