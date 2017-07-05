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
  //check if it's an empty array and return true if it is
  if(theArray.length === 0){
     return true;
   }
  //loop over the elements in the array - forEach wasn't working anymore for me
  for (var i = 0; i < theArray.length; i++){
    if(!predicate(theArray[i])){
       return false; //this should break the loop and stop running the function if it returns
      } else {
      return true;
    } 
  }  
}  



function some(predicate, theArray) {
  //check if the array is empty
  if(theArray.length === 0) {
    return false;
  }
 //I will write an if/else statement. If i find a variable that passes, 
  //I'll return true. If none pass, I'll return false.
    //loop
    for(var i = 0; i < theArray.length; i++)
      //check if an element in the array is passing the predicate function
      if(predicate(theArray[i])) {
        return true;
        } else if(predicate(theArray[i]) != true) {
        return false;
        } 
} 


function indexOf(item, theArray) {
  //check if empty array
  if(theArray.length === 0) {
    return -1;
  }
  
  //loop through the array
  for(var i = 0; i < theArray.length; i++) {
    
    //check if statement 
    if (item === theArray[i]) {
      return i; 
    } 
  } if (item !== theArray[i]) {
    return -1;
  }
  var fruit = ["apple", "orange"];
  console.log(indexOf("apple", fruit));
} 

function findIndex(predicate, theArray) {
  //loop
  for(var i = 0; i<theArray.length; i++) {
    if (predicate(theArray[i]) === true) {
      return i;
    } 
  } if(predicate(theArray[i]) === false) {
      return -1;
    }
  
}
//we need both indexOf and findIndex because indexOf compares values in an array
//while findIndex checks boolean values (more useful in the example of the pet 
//object array, where checking for one value doesn't make as much sense)

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
