function forEach(callback, theArray) {

 // a for loop will go through each item in the array 
  for(var i = 0; i < theArray.length; i++) {
       callback(theArray[i]); //this is the callback function
    } 
} 

function map(mappingFunction, theArray) {
  //declare a variable to represent our output: a new array with mapped elements
  var mappedArray = [];
  
  //make sure the function loops through each item in the array
    theArray.forEach(function(element) {
      
      //decalare a new variable to represent the mapped elements
      var mappedElements = mappingFunction(element);
      
      //push newly mapped elements to the output array
      mappedArray.push(mappedElements);
    })
   return mappedArray;
}





function filter(predicate, theArray) {

}

function every(predicate, theArray) {

}

function some(predicate, theArray) {

}

function indexOf(item, theArray) {

}

function findIndex(predicate, theArray) {

}

function first(n, theArray) {

}

function last(n, theArray) {

}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
