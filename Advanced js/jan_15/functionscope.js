function fun(){
    console.log(y);//y is accessible here not outside
    var y ="pulkit";
   
}
//console.log(y);

function gun(){
    console.log(z);//not accessible here 
    let z ="pulkit";
   
}
gun();

