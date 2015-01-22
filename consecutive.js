// Using the JavaScript language, have the function Consecutive(arr) take the array of integers 
// stored in arr and return the minimum number of integers needed to make the contents of arr 
// consecutive from the lowest number to the highest number. For example: If arr contains [4, 8, 6] 
// then the output should be 2 because two numbers need to be added to the array (5 and 7) to make 
// it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and 
// no array will have less than 2 elements. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.


function Consecutive(arr){

  // code goes here

  var numsNeeded = 0;

  arr.sort(function(a,b){ return a > b;});


  arr.forEach(function(val, idx){
    if(!arr[idx+1]){ return; }
    if(arr[idx+1] !== arr[idx]+1){
      numsNeeded = numsNeeded + (arr[idx+1] - arr[idx] - 1);
    }
  });

  return numsNeeded;
}