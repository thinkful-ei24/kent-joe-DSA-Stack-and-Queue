/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// const {_Node stackyNode} = require('./stack');
const { Stack } = require('./stack');

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

// main();

class stackyQueue {
  constructor() {
    this.queueStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(value) {
    if (!this.queueStack.top) {
      return this.queueStack.push(value);
    }
    if (this.queueStack.top) {
      let current= this.queueStack.top;

      while (current !== null) {
        this.secondStack.push(this.queueStack.pop());
        current = this.queueStack.top;
      }

      this.queueStack.push(value);
      current = this.secondStack.top;

      while (current !== null) {
        this.queueStack.push(this.secondStack.pop());
        current = this.secondStack.top;
      }
    }
  }

  dequeue() {
    return this.queueStack.pop();
  }
}

const kentStack = new stackyQueue();

kentStack.enqueue(1);
kentStack.enqueue(2);
kentStack.enqueue(3);
kentStack.enqueue(4);
kentStack.enqueue(5);
kentStack.enqueue(6);
kentStack.enqueue(8);
kentStack.enqueue(9);
kentStack.enqueue(10);
kentStack.enqueue(11);


function squareDance(queue) {
  const spares = new Queue();
  let maleDancer;
  let femaleDancer;
  let current = queue.first;
  while (current) {
    if (!spares.first) {
      spares.enqueue(queue.dequeue());
    } else {
      if (spares.first.value.gender === queue.first.value.gender) {
        spares.enqueue(queue.dequeue());
      } else {
        const dancer1 = spares.dequeue();
        const dancer2 = queue.dequeue();
        if (dancer1.gender === 'M') {
          maleDancer = dancer1;
          femaleDancer = dancer2;
        } else {
          maleDancer = dancer2;
          femaleDancer = dancer1;
        }
        console.log(`Female dancer is: ${femaleDancer.name} and the male dancer is: ${maleDancer.name}`);
      }
    }
    current = queue.first;
  }

  let count = 0;
  let gender = '';
  current = spares.first;

  while (current) {
    count++;
    gender = current.value.gender;
    spares.dequeue();
    current = spares.first;
  }
  if (count) {
    console.log(`There are ${count} ${gender} dancers waiting to dance`);
  }
  return spares;
}

const dancers = new Queue();
dancers.enqueue({ gender: 'F', name: 'Jane' });
dancers.enqueue({ gender: 'M', name: 'Frank' });
dancers.enqueue({ gender: 'M', name: 'John' });
dancers.enqueue({ gender: 'M', name: 'Sherlock' });
dancers.enqueue({ gender: 'F', name: 'Madonna' });
dancers.enqueue({ gender: 'M', name: 'David' });
dancers.enqueue({ gender: 'M', name: 'Christopher' });
dancers.enqueue({ gender: 'F', name: 'Beyonce' });

// squareDance(dancers);

function bankQueue (queue) {
  let current = queue.first;
  let messup = Math.floor(Math.random() * Math.floor(4));

  while(current) {
    if(messup === 0) {
      queue.enqueue(queue.dequeue);
    } else {
    queue.dequeue();
    }
    messup = Math.floor(Math.random() * Math.floor(4));
    current = queue.first; 
  }

  return 'No one is left';
}

const bankQ = new Queue();

bankQ.enqueue(1);
bankQ.enqueue(2);
bankQ.enqueue(3);
bankQ.enqueue(4);
bankQ.enqueue(5);
bankQ.enqueue(6);
bankQ.enqueue(7);
bankQ.enqueue(8);
bankQ.enqueue(9);
bankQ.enqueue(10);

console.log(bankQueue(bankQ));