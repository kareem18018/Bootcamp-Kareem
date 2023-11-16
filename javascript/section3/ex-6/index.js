function sortNumbers(array,compareFn){
return array.slice().sort(compareFn);
}
function compareNumberAscending(a,b){
return a-b;
}
const array=[1,4,5,9,8,7,3];
const result =sortNumbers(array,compareNumberAscending);
console.log(result);