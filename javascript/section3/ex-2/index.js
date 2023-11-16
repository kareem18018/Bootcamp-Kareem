function filterAndMap(numbers,filterFn,mapFn){
const filternumbers=numbers.filter(filterFn);
const squarednumbers=filternumbers.map(mapFn);
return squarednumbers;
}
const numbers=[1,2,3,4,5];
const filterFn=(numbers)=>numbers%2!==0;
const mapFn=(number)=>number*number;
const filterAnddoubled=filterAndMap(numbers,filterFn,mapFn);
console.log(filterAnddoubled);