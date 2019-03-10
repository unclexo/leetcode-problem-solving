var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  const temp = new ListNode(0);
  let resultNode = temp;

  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    let newNode = new ListNode(sum % 10);
    resultNode.next = newNode;
    resultNode = newNode;
    sum = parseInt(sum / 10);
  }

  if (sum == 1) {
    resultNode.next = new ListNode(1);
  }

  return temp.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
};

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const result = addTwoNumbers(l1, l2);

console.log(result.next.next.next);