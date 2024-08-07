// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

/**
 * @param {ListNode} current
 * @param {ListNode} node
 * @return {ListNode}
 */
const push = (current, node) => {
  current.next = node;
  node.next = null;
  return node;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  let next1;
  let next2;
  let linkedList = {};
  let current = linkedList;

  while (l1 !== null || l2 !== null || carry) {
    next1 = l1 ? l1.next : null;
    next2 = l2 ? l2.next : null;
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // note below
    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    const node = {};
    node.val = digit;
    current = push(current, node);
    l1 = next1;
    l2 = next2;
  }

  return linkedList.next;
};

// note:
// I'd prefer the following:
// always set carry to zero;
// if sum > 9, get only the unit digit and set carry to 1;
// but it appears that the non-commented version is more performatic :)
// carry = 0;
// if (sum > 9) {
//   sum = sum % 10;
//   carry = 1;
// }
