/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    //create a node with the data that you want to add to the queue
    const node = new _Node(data);

    //if the queue is empty,
    //make the node the first node on the queue
    if (this.first === null) {
      this.first = node;
    }

    //if there is something on the queue already
    //then take the node that is currently at the end of the queue
    //and link it to the new node
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }

    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

function peek(queue) {
  return queue.first;
}

function display(queue) {
  let current = queue.first;
  let list = [];
  while (current !== null) {
    list.push(current);
    current = current.prev;
  }

  return list;
}


function main() {
  const starTrekQ = new Queue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  // console.log('Peek: ', peek(starTrekQ));
  console.log('Display: ', display(starTrekQ));
}

main();