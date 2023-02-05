console.log(NaN === NaN);
console.log(-0 === +0);
let obj1 = {x:10};
let obj2 = {x:10};
let obj3 = {y:10};
console.log(obj1 === obj2);
console.log(obj1 === obj1);
console.log(obj1 === obj3);//compare different memory obj give false result
