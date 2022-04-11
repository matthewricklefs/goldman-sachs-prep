function printString(columnNum) {
  let columnName = [];

  while (columnNum > 0) {
    let rem = columnNum % 26;

    if (rem == 0) {
      columnName.push('Z');
      columnNum = Math.floor(columnNum / 26) - 1;
    } else {
      columnName.push(String.fromCharCode(rem - 1 + 'A'.charCodeAt(0)));
      columnNum = Math.floor(columnNum / 26);
    }
  }

  console.log(columnName.reverse().join('') + '\n');
}

printString(26);
printString(51);
printString(52);
printString(80);
printString(676);
printString(702);
printString(705);

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
