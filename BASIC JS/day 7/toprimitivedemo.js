/*
let obj ={}
console.log(typeof obj.toString())//string
console.log(obj.toString())//WHAT STRING IT IS [object,object]
let obj1 = {
    toString(){
        return "shreya";
    }
};
console.log(typeof obj1.toString());
*/
let obj = {x:8,valueOf() {return "9";}};
console.log(typeof obj.valueOf());
let obj1 = {x:8,valueOf() {return 88;}};
console.log(obj-obj1);
let obj2 = {x:8,toString() {return {}}};
console.log(100-obj2);




