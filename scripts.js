// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    // loop the given array
    var compareElement = array[0];
    console.log('This is the compare element #1', compareElement);
    for (var i = 1; i < array.length; i++){
     if (array[i] > compareElement){
       compareElement = array[i];
     } else if (array[i] === compareElement) {
       continue;
     } else {
       continue;
     }
    }
    return compareElement;
  },

  reversed: function(){
    // your code here
  },

  loudSnakeCase: function(){
    // your code here
  },

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(){
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
