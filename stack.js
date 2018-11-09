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

function peek(stack) {
  return stack.top;
}

function display(stack) {
  let current = stack.top;
  let list = [];

  while(current !== null) {
    console.log('current in loop', current);
    list.push(current);
    current = current.next;
  }
  return list;
}

function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log('peeking', peek(starTrek));
  console.log('display', display(starTrek));

  starTrek.pop();
  starTrek.pop();

  console.log('display no mckoy', display(starTrek));
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const stack = new Stack();
  for(let i=0; i < s.length; i++) {
    stack.push(s[i]);
  }
  let reverseS= '';
  let current = stack.top;
  while(current !== null) {
    reverseS += current.data;
    current = current.next;
  }

  if(reverseS === s) {
    return true;
  } else {
    return false;
  }
}

// console.log(is_palindrome('A man, a Plan, A CaNaL: PanaMa'));