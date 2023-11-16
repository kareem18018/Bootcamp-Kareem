function operateOnArray(array,operationFn){
const resultArray=arrays.map(operationFn);
return resultArray;
}
function squarednumber(n){
    return n*n;
}
let arrays=[1,3,5,7,9];
const result=operateOnArray(arrays,squarednumber);
console.log(result);
