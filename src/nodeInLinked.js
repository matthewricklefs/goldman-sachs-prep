var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function push(new_data) {
  var new_Node = new Node(new_data);

  new_Node.next = head;

  head = new_Node;
}

function printList() {
  var tNode = head;
  while (tNode != null) {
    console.log(tNode.data + ' ');
    tNode = tNode.next;
  }
}

function deleteNode(Node_ptr) {
  var temp = Node_ptr.next;
  Node_ptr.data = temp.data;
  Node_ptr.next = temp.next;
  temp = null;
}

push(1);
push(4);
push(1);
push(12);
push(1);

console.log('Before deleting<br/>');
printList();

/*
 * I m deleting the head itself. You can check for more cases
 */
deleteNode(head);

console.log('<br/>After Deleting <br/>');
printList();
