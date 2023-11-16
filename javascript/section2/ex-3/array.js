function reversedString(str){
var reverseString='';
for (let i= str.length-1;i>=0;i--) {
  reverseString+= str[i];
}
return reverseString;}
const kareem='welcome to aganitha';
const result=reversedString(kareem);
console.log(result);