
//  TypeScript Types



//  Type Accerssions 
let message;
message = "abc";
let endsWithC = (<string>message).endsWith("c" || "C");
let altEndsWithC = (message as string).endsWith("c" || "C");

//  Arrow Functions [Lamda]
let log =  function(message){   //standard JS function variable
    console.log(message);
}

let lamdaLog = (message) => {  //standard and prefered arrow/lamda function
    console.log(message);
}

let lamdaLog2 = (message) => console.log(message);  //single line function algo

let lamdaLog3 = message => {console.log(message);}  //single argument lamda function

let lamdaLog4 = () => {console.log("no arguments/parameter")}   //no argument lamda function


