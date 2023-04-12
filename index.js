var num1Element = document.getElementById('num1');
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector('button');
var numResult = [];
var stringResult = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    var toStringres = add(num1, num2);
    numResult.push(result);
    stringResult.push(toStringres);
    document.getElementById('print').innerHTML = "<p >number add: ".concat(result.toString(), " , and string add: ").concat(toStringres, "</p>");
    console.log(result);
    printResult({ val: result, timestamp: new Date });
    console.log(numResult, stringResult);
});
