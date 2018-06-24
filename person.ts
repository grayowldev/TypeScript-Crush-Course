/*
    A class outside the main is know as a module
    When importing a module, we don't add the file type '.ts'
*/
export class Person{
    _name: string;
    _age: number;

    get name(){
        return this._name
    }
    set name(name: string){
        if(name != ""){
            this._name = name
        }else{
            throw new Error("Invalid name");
        }
    }
}