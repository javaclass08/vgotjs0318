/* 
Problem:
	Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

*/


function loneSum(a,  b, c) {
  
  if(a == b && b == c && c == a) return 0; 
  if(a == b) return c;
  if(a == c) return b;
  if(b == c) return a;
  
  return a + b + c;
  
}

console.log(loneSum(1, 2, 3) ); // 6
console.log(loneSum(3, 2, 3) ); // 2
console.log(loneSum(3, 3, 3) ); // 0
console.log();

console.log(loneSum(9, 2, 2) ); // 9
console.log(loneSum(2, 2, 9) ); // 9
console.log(loneSum(2, 9, 2) ); // 9
console.log();

console.log(loneSum(2, 9, 3) ); // 14
console.log(loneSum(4, 2, 3) ); // 9
console.log(loneSum(1, 3, 1) ); // 3