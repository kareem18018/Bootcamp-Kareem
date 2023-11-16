function calculate(a,b,operationFn){
return operationFn(a,b);
}

function addition(a,b){
return a+b;
}

function subtraction(a,b){
return a-b;
}

const additionOfTwo =calculate(5,3,addition);
const subtractionOfTwo= calculate(6,3,subtraction);
console .log(additionOfTwo);
console .log(subtractionOfTwo);