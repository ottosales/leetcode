// 3042. Count Prefix and Suffix Pairs I
// https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const isPrefixAndSuffix = (str1, str2) => {
  return str2.startsWith(str1) && str2.endsWith(str1);
};

/**
 * @param {string[]} words
 * @return {number}
 */
const countPrefixSuffixPairs = (words) => {
  let count = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      count += Number(isPrefixAndSuffix(words[i], words[j]));
    }
  }

  return count;
};
