// 2396. Strictly Palindromic Number
// https://leetcode.com/problems/strictly-palindromic-number/

const isPalindrome = (n) => {
  return n === n.split("").reverse().join("");
};

const toBaseN = (n, base) => {
  let quotient = base;
  const newNumber = [];
  while (quotient > 0) {
    const remainder = n % base;
    newNumber.push(remainder);
    quotient = Math.floor(n / base);
    n = quotient;
  }

  // here the number is actually reversed, but it doesn't matter
  // for the palindrome check
  return newNumber.join("");
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isStrictlyPalindromic = (n) => {
  let i = 2;
  while (i <= n - 2) {
    if (!isPalindrome(toBaseN(n, i))) return false;
    i++;
  }

  return true;
};
