/* 
Problem:
	Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.
*/

function maxEnd3 (nums) {
  
  var max= (nums[0] > nums[2])?nums[0]:nums[2];
  for(var i = 0;i < nums.length; i++) {
      nums[i] = max;
  }
  return nums;
    
}

console.log(maxEnd3([1, 2, 3]) ); // [3, 3, 3]
console.log(maxEnd3([11, 5, 9]) ); // [11, 11, 11]
console.log(maxEnd3([2, 11, 3]) ); // [3, 3, 3]
console.log();

console.log(maxEnd3([11, 3, 3]) ); // [11, 11, 11]
console.log(maxEnd3([3, 11, 11]) ); // [11, 11, 11]
console.log(maxEnd3([2, 2, 2]) ); // [2, 2, 2]
console.log();

console.log(maxEnd3([2, 11, 2]) ); // [2, 2, 2]
console.log(maxEnd3([0, 0, 1]) ); // [1, 1, 1]



