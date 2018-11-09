class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // same as insertFirst
  push(data) {
    if (!this.top) {
      this.top = new _Node(data, null);
      return this.top;
    } else {
      const node = new _Node(data, this.top);
      this.top = node;
    }
  }

  // same as removeFirst
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
}

main();