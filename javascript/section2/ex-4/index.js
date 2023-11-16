function evenNumber(num){
const even=num.filter(number=>number%2!==0);
return even;
}
const mynumbers=[1,2,3,4,5,6,7,8,9,10];
const result=evenNumber(mynumbers);
console.log(result);