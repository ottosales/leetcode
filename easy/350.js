// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// What if the given array is already sorted? How would you optimize your algorithm?
// - in the response I'm sorting the arrays as if they were being passed to the function already sorted. best approach is use two pointers
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
// - if nums1 is much smaller than nums2, or if nums2 is large enough so we need to read it in
// chunks, we can use a hashmap to store all entries of nums1, counting how many times each element appeared
// and run through nums2 once. if element in nums2 appears on hashmap, we put it in a response array
// and subtract the hashmap count by 1. if the hashmap count reaches zero, we remove the element from the hashmap
// so that it won't appear more times in the response than it appears in nums1

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const intersectArray = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      intersectArray.push(nums1[i]);
      i++;
      j++;
    }
  }

  return intersectArray;
};
