// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
  const maxCandiesAmongKids = Math.max(...candies);
  const boolArray = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandiesAmongKids) boolArray.push(true);
    else boolArray.push(false);
  }

  return boolArray;
};
