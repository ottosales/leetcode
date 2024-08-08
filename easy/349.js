// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const intersectArray = [];

  set1.forEach((element) => {
    if (set2.has(element)) intersectArray.push(element);
  });

  return intersectArray;
};
