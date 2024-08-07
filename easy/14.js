// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let prefix = "";

  for (let pointer = 0; pointer < strs[0].length; pointer++) {
    let satisfiesAllStrings = true;
    const charAtPointer = strs[0][pointer];
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].length === pointer || strs[i][pointer] !== charAtPointer) {
        satisfiesAllStrings = false;
        break;
      }
    }
    if (satisfiesAllStrings) {
      prefix = prefix + charAtPointer;
    } else {
      break;
    }
  }

  return prefix;
};
