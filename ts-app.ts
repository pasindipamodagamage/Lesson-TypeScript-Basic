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