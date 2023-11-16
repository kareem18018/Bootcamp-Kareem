function multiplyBy(x){
    return function (y){
        return x * y;
    }
}
const multi=multiplyBy(2);
console.log(multi(3));