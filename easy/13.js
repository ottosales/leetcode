// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let previousNumber = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentLetter = s[i];
    const currentNumber = romanToIntMap[currentLetter];

    if (currentNumber < previousNumber) {
      result -= currentNumber;
    } else {
      result += currentNumber;
    }
    previousNumber = currentNumber;
  }
  return result;
};
