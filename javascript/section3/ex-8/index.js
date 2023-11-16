function composeWithReduce(array){
return function(x){
return array.reduce((acc,func)=>func(acc),x);
}
}
function double(x) {
    return 2 * x;
  }

  function square(x) {
    return x ** 2;
  }

  function addOne(x) {
    return x + 1;
  }
  const functionsArray = [double, square, addOne];
const composedFunctions=composeWithReduce(functionsArray);
const result=composedFunctions(3);
console.log(result);