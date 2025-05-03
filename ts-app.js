// 1
function testVariableInterface() {
    var count = 5;
    var name = "pasindi";
}
// 2
function add() {
    return "";
}
// 3
function returnVariable(a, b) {
    return a + b;
}
// 4
function testArrayInterface() {
    var animal = [];
    var animal2 = ["cat", "dog", "parrot"];
    var items = [1, "", true];
}
// 5
function returnDefaultValue(name) {
    if (name) {
        return "Hello ".concat(name);
    }
    else {
        return "hello guest";
    }
}
console.log(returnDefaultValue());
console.log(returnDefaultValue("pasindi"));
// 6
function returnDefaultValueWhenValueGivenAsParameter(name) {
    if (name === void 0) { name = "givenValue"; }
    return "Hello ".concat(name);
}
console.log(returnDefaultValueWhenValueGivenAsParameter());
console.log(returnDefaultValueWhenValueGivenAsParameter("TypeScript"));
