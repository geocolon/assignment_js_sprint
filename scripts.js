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

  reversed: function(string){
    // your code here
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  },

  loudSnakeCase: function(string){
    // your code here
    var reWhiteSpace = new RegExp("/^\s+$/");
var punctuationless = exampleString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var normalString = punctuationless.replace(/\s{2,}/g," ");
function capitalize_Words(str)
{
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
var allCapString = capitalize_Words(normalString);
var splitString = allCapString.split('');
var endString = [];
  for (i = 0; i < splitString.length; i++){
  if(splitString[i] === ' '){
       endString.push('_')
     } else {
       endString.push(splitString[i]);
     }
   }
   return console.log(endString.join(''));
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
