class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    // move all elements from s1 to s2
    while (this.s1.length != 0) {
      this.s2.push(this.s1.pop());
    }

    // push item into s1
    this.s1.push(x);

    // push everything back to s1
    while (this.s2.length != 0) {
      this.s1.push(this.s2.pop());
    }
  }
  // delete an item from the queue
  deQueue() {
    if (this.s1.length == 0) {
      console.log('This Queue is Empty!');
    }

    //   return top of s1
    let x = this.s1[this.s1.length - 1];
    this.s1.pop();
    return x;
  }
}

let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q.deQueue() + '<br>');
console.log(q.deQueue() + '<br>');
console.log(q.deQueue() + '<br>');
