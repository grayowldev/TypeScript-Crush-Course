
//  TypeScript Types



//  Type Accerssions 
let message;
message = "abc";
let endsWithC = (<string>message).endsWith("c");
let altEndsWithC = (message as string).endsWith("c");


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


//  Custom TS Types
let drawPoint = (a,b,c,d,e,f,g) => {
    // try to avoid functions with many arguments
}

//--------------------------------------------------------------------------------------------------
interface Point{    //use Pascal case/naming convension with interfaces
    x: number,
    y: number
    draw: () => void;   //interfaces cannot implement logic
}

let drawPoint2 = (point:Point) => {

}
    /*
        Though the above interface/function relationship is valid, it violates the cohetion principle.
        A better option is to use a class
    */
//--------------------------------------------------------------------------------------------------

class PointClass{
    x: number;
    y: number;

    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }


    draw(){     //Funtion in class hence this is a Method
        // Draw logic goes here
        console.log(this.x + "," + this.y);
        
    }
    getDistance(){
        //get distance logic goes here
        
    }
}

let point = new PointClass(5,7);   //instance of PointClass
point.draw();

