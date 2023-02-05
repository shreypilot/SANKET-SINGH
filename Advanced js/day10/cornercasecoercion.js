
    console.log("" + 0); //0 ->"0"
    console.log("" + (-0)); //-0 ->"0"
    console.log("" + []); //[] ->""
    console.log("" + {});
    console.log("" + [1, 2, 3]);
    console.log("" + [null, undefined]);
    console.log("" + [1, 2, null, 4]);

    //ToNumber
    console.log(0 - "010"); //decimal number
    console.log(0 - 010); //OCTAL NUMBER
    console.log([] - 1 );
    console.log([""] - 1 );
    console.log(0 - "o10");
    console.log(["0"] - 1 );

