
//  TypeScript Types
let a: string;
let b: number;
let c: boolean;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, "false"];

enum Color {
    Red = 1,
    Blue = 2,
    Green = 3
    /* Strong assignment prevents future errors when more color are add, example: adding pink 
        in the 2 position would cause Blue to now become 3, and this can break your code.
    */
};




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

class PointClass{   //  ts defaults to public if unspecified
    private _x: number;                      //  since the class variables are private it is advicable to require or set them in the constructor
    private _y: number;                      // by convention class var in TS begin with "_"
    //private z: number;

    constructor(x?:number, y?:number){      //  "?" is the optional symbol which make the arguments optional
        this._x = x;
        this._y = y;
    }

    /*
    constructor(private x?:number, private y?:number, private z?:number){      
        //  Multiple constuctors are not allowed, however using access modifiers in the arguments
            eleminates the need of class variable initiaiztion  //

    }
    */


    draw(){     //Funtion in class hence this is a Method
        // Draw logic goes here
        console.log(this._x + "," + this._y);
        
    }

    // Getter and Setter Functions
    getX(){
        return this._x;
    }
    setX(value){
        if(value < 0){
            throw new Error('value has to be possitive');
        }
        this._x = value;
        
    }

    /*
        TS however has a property feature built in which works in the same way (as shown below)
    */
    get x(){    
        return this._x;
    }
    set x(value){
        if(value < 0){
            throw new Error('value has to be possitive');
        }
        this._x = value;
    }

    getDistance(){
        //get distance logic goes here
        
    }
}

let point = new PointClass(5,7);   //instance of PointClass
point.draw();

point.x;
point.setX(3)   //generic setter
point.getX();   //generic getter
point.x = 13;   //TS setter [property feature]
point.x;        //TS getter
point.draw();

/*
    Here we defined a class inside the main file. This is not adviced
    In TS all every class should have its own ts file.
    This howeve would make it invisible on a globale scope, we can solve this issue by prefixing
    the class declearation with the "export" command
    see the person.ts for more.
*/

import { Person } from './person';  /*again we import from './person', not './person.ts'
                                        we can also import multiple classes by using the ',' symbol
                                        ex: import { Person, Student, Teacher } from './persons'
                                    */
let john = new Person();
john.name = "John";     
