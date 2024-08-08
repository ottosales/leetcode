// 1002. Find Common Characters
// https://leetcode.com/problems/find-common-characters/
// another solution, since words are limited to 26 characters, is to create an array with 26 0s and store
// how many times we see a letter in a specific array position, with 'a' being 0 and 'z' being 25

/**
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = (words) => {
  if (words.length === 1) return words[0].split("");

  let firstWord = words[0].split("");
  const otherWords = words.slice(1, words.length);

  otherWords.forEach((word) => {
    let splittedWord = word.split("");
    let i = 0;
    while (i < firstWord.length) {
      let foundInSecondWord = false;
      let j = 0;
      while (j < splittedWord.length) {
        if (firstWord[i] === splittedWord[j]) {
          splittedWord.splice(j, 1);
          foundInSecondWord = true;
          break;
        } else j++;
      }
      if (foundInSecondWord) i++;
      else firstWord.splice(i, 1);
    }
  });

  return firstWord;
};
