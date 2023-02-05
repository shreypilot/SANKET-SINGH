console.log(12 == "12");
console.log(false == "0");



console.log(false == null);
console.log("NaN" == NaN);


let obj = {x:8,valueOf() {return "9";}};
console.log(9==obj);
console.log(10==obj);
console.log(typeof(null));
console.log(typeof(undefined));