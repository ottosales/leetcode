// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
// respects follow-up
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

const recursivelyRevertList = (current, prev) => {
  if (current === null) return prev;
  const newNext = current.next;
  current.next = prev;
  return recursivelyRevertList(newNext, current);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  // commented out iterative version
  // let current = head;
  // let prev = null;
  // let next;

  // while (current !== null) {
  //   next = current.next;
  //   current.next = prev;
  //   prev = current;
  //   current = next;
  // }

  return recursivelyRevertList(head, null);
};
