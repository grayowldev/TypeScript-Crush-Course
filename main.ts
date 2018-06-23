
//  TypeScript Types



//Type Accerssions 
let message2;
message2 = "abc";
let endsWithC = (<string>message2).endsWith("c" || "C");
let altEndsWithC = (message2 as string).endsWith("c" || "C");

//

