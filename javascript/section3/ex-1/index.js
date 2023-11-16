function compose(f,g){
return function (x){
    return f(g(x));
}
}
function square(x){
    return x * x;
}
function double(x){
return 2 * x;
}
const doubleOfsquared=compose(square,double);
console.log(doubleOfsquared(5));