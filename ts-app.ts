// 1
function testVariableInterface(){
    let count=5;
    let name="pasindi";
}

// 2
function add(){
    return "";
}

// 3
function returnVariable(a,b){
    return a + b;
}

// 4
function testArrayInterface(){
    let animal=[];

    let animal2=["cat","dog","parrot"];

    let items=[1,"",true];
}

// 5
function returnDefaultValue(name?:string){
    if(name){
        return `Hello ${name}`;
    } else {
        return "hello guest";
    }
}

console.log(returnDefaultValue());
console.log(returnDefaultValue("pasindi"));

// 6
function returnDefaultValueWhenValueGivenAsParameter(name:string ="givenValue"){
    return `Hello ${name}`;
}
console.log(returnDefaultValueWhenValueGivenAsParameter());
console.log(returnDefaultValueWhenValueGivenAsParameter("TypeScript"));

// 7
function testEnum(){
    enum Direction{
        UP,
        DOWN,
        LEFT,
        RIGHT,
        DOWNSTRING="DOWN"
    }
    let move:Direction=Direction.DOWN;
    console.log(move);

    let moveString:Direction=Direction.DOWNSTRING;
    console.log(moveString);
}
testEnum();

// 8
function testTuple(){
    let person:[string,number]=["Saman",25];

    console.log(person);
    console.log(person[0]);
    console.log(person[1]);
}
testTuple();

// 9
// this like getter yawana value ekama return krnw
function testGenerics<T>(Value:T):T{
    return Value;
}
console.log(testGenerics<string>("hi there"));
console.log(testGenerics<number>(23));

//10
// generics with interface
function testGenericsWithInterface(){

    interface ApiResponse<T>{
        data:T;
        statusCode:number;
    }

    let response: ApiResponse<string>={
        data:"User Data Added",
        statusCode:200
    }
    console.log(response);
}
testGenericsWithInterface();

//
//
// 11
// object oriented in js

interface Animal{
    run():void;
}

class Human implements Animal{
    private noOfLegs: number;
    private noOfHands:number;

    public constructor(noOfLegs:number,noOfHands:number) {
        this.noOfLegs=noOfLegs;
        this.noOfHands=noOfHands;
    }

    public setNoOfLegs(noOfLegs:number){
        this.noOfLegs=noOfLegs;
    }

    public getNoOfLegs():number{
        return this.noOfLegs;
    }

    public setNoOfHands(noOfHands:number){
        this.noOfHands=noOfHands;
    }

    public getNoOfHands():number{
        return this.noOfHands;
    }


    run():void{
        console.log("Human is running");
    }
}

class Employee extends Human{

    private empCode:string;
    private empName:string;

    public constructor(noOfLegs:number,noOfHands:number,empCode:string,empName:string) {
        super(noOfLegs,noOfHands);
        this.empCode=empCode;
        this.empName=empName;
    }

    public setEmpCode(empCode:string){
        this.empCode=empCode;
    }

    public setEmpName(empName:string){
        this.empName=empName;
    }

    public getEmpCode(){
        return this.empCode;
    }

    public getEmpName(){
        return this.empName;
    }

    run():void{
        console.log("Employee is running");
    }
}

let employee =new Employee(2,2,"Emp100","saman");

console.log(employee.getEmpName());
console.log(employee.getEmpCode());
// console.log(employee.run());
employee.run();