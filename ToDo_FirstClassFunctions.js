const _l = msg => console.log('Output ==> [' + msg + ']');

//Assignment -> TODO - create new array with (length + 2) from names array

const names = ['Pooja', 'Prathiksha', 'Renuka', 'Rishikesh'];

function nameLen(name){
    return name.length + 2;
}

//Method 1
const newNameLen = names.map(nameLen);

_l('-------');
_l(newNameLen);     //[7,12,8,11]
_l('-------');

//Method 2
newArr = [];
for(var i=0;i<names.length;i++){
  newArr.push(nameLen(names[i]));
}
_l("Incremented with newArr = " + newArr);  //[Incremented with newArr = 7,12,8,11]

//Method 3
const findLen = function(name){
  return name.length;
}

const addTwo =function(n) {
  return n+2;
}

newArr = [];
for(var i=0;i<names.length;i++){
  newArr.push(addTwo(findLen(names[i])));
}
_l("Incremented with newArr = " + newArr);  //[Incremented with newArr = 7,12,8,11]


// Functions to add 2 to each and evewry element of the Array
const v = function (x){
    return x+2;
}

const getInc = function(n){
  //closure
  return function(x){
    return x+n;
  }
}

const nums = [1, 2, 3, 4, 5];

var newArr = [];
let incr = getInc(3);
for(var i=0;i<nums.length;i++){
  newArr.push(incr(nums[i]));
}
_l("Incremented with newArr = " + newArr);    // [Incremented with newArr = 4,5,6,7,8]

newArr = [];
incr = getInc(10);
for(var i=0;i<nums.length;i++){
  newArr.push(incr(nums[i]));
}
_l("Incremented with newArr = " + newArr);   // [Incremented with newArr = 11,12,13,14,15]


newArr = [];
incr = getInc(10);
for(var i=0;i<nums.length;i++){
  newArr.push(incr(v(nums[i])));
}
_l("Incremented with newArr = " + newArr);    //[Incremented with newArr = 13,14,15,16,17]

newArr = [];
for(var i=0;i<nums.length;i++){
  newArr.push(v(nums[i]));
}
_l("Incremented with newArr = " + newArr);    // [Incremented with newArr = 3,4,5,6,7]


//map -> for each value in array, apply the passed fun and push it into a new array
//Create a new array from values such that each value = orig value + 2
// use map function

const f = function(p){
  return p+2;
}
const numplus2s = nums.map(f); // creates copy without changing original nums

_l('-------');
_l(numplus2s);    //[3,4,5,6,7]
_l('-------');
