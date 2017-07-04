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
   return mappedArray; //our output
}

function filter(predicate, theArray) {
  //new array to hold filtered elements
  var filteredArray = [];
  
  //make sure we loop
  theArray.forEach(function(element) {
    
    //declare a new variable to represent filtered elements
    var filteredElement = predicate(element);
    
    //test the boolean result of filtering process; if true, push to new array
    if(filteredElement) {
      
     
    //push filtered elements to the output array
    filteredArray.push(filteredElement);
    }
  });
  
  return filteredArray; //output
}



function every(predicate, theArray) {
  //I want to write an if/else statement. If i find a variable that doesn't pass, 
  //I'll return false. If all pass, I'll return true.
    //loop
    theArray.forEach(function(element) {
      //check if an element in the array is not passing the predicate function
      if(predicate(element) === false) {
    return false;
  } else {
    return true;
  }
      
    });
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
