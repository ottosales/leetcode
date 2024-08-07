// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/
// respects follow-up
// Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  // easy way
  // return x.toString() === x.toString().split("").reverse().join("");

  // respecting follow-up
  let originalNumber = x;
  let reversedNumber = 0;
  while (x > 0) {
    const digit = x % 10;
    reversedNumber = reversedNumber * 10 + digit;
    x = Math.floor(x / 10);
  }

  return originalNumber === reversedNumber;
};
