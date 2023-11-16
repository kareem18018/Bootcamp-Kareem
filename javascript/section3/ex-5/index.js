function curry(binaryFunction){
return function(x){
    return function(y){
        return binaryFunction(x,y);
    }
}
}
function additonFn(x,y){
return x+y;

}
const curriedAddition=curry(additonFn);
console.log(curriedAddition(5)(4));