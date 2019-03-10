class Solution {
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    int sum = 0;
    ListNode temp = new ListNode(0);
    ListNode resultNode = temp;

    while (l1 != null || l2 != null) {
      if (l1 != null) {
        sum += l1.val;
        l1 = l1.next;
      }

      if (l2 != null) {
        sum += l2.val;
        l2 = l2.next;
      }

      ListNode newNode = new ListNode(sum % 10);
      resultNode.next = newNode;
      resultNode = newNode;
      sum /= 10;
    }

    if (sum == 1) {
      resultNode.next = new ListNode(1);
    }

    return temp.next;
  }
}