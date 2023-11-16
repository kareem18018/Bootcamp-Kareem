function evenOdd(arr){
var evenIndex=[];
var oddIndex=[];
for(var i=0;i<arr.length;i++){
if(i%2===0){
evenIndex.push(arr[i]);
}else{
oddIndex.push(arr[i]);
}
}
return [evenIndex,oddIndex];
}
var myArr=[1,2,3,4,5,6,7,8,9,10];
var result=evenOdd(myArr);
console.log(result[0]);
console.log(result[1]);

