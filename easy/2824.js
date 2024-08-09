// 2824. Count Pairs Whose Sum is Less than Target
// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const countPairs = (nums, target) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) count++;
    }
  }

  return count;
};

// I think this soulution would work better if the constraints were a bit more aggressive
// since nums.length <=50, brute force works great, but if nums.length <= 1000, for example
// nlogn would be quicker
// const countPairsSorting (nums, target) => {
//   nums.sort((a, b) => a - b);
//   let i = 0;
//   let j = nums.length - 1;
//   let count = 0;

//   while (i !== j) {
//     if (nums[i] + nums[j] < target) {
//       count++;
//       i++;
//     } else {
//       j++;
//     }
//   }

//   return count;
// }
