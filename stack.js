/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
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

  while (current !== null) {
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
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack = new Stack();
  for (let i=0; i < s.length; i++) {
    stack.push(s[i]);
  }
  let reverseS= '';
  let current = stack.top;
  while (current !== null) {
    reverseS += current.data;
    current = current.next;
  }

  if (reverseS === s) {
    return true;
  } else {
    return false;
  }
}

// console.log(is_palindrome('A man, a Plan, A CaNaL: PanaMa'));


function checkParentheses(s) {
  const stack = new Stack();
  let open = 0;
  for (let i=0; i<s.length; i++) {
    if (s[i] === '(') {
      if (!stack.top) {
        open = i;
      }
      stack.push(s[i]);
    } else if (s[i] === ')') {
      if (!stack.top) {
        return `fix your stuff at ${i}`;
      }
      const popped = stack.pop();
      if (popped !== '(') {
        return `fix your stuff at ${i}`;
      }
    }
  }

  if (stack.top) {
    return `open parentheses at ${open}`;
  }
  return 'no problems';
}

// console.log(checkParentheses('(())())(())'));

function stackSort(stack) { //stack: 1
  const newStack = new Stack(); //  1, 2, 3, 4
  let tempNum; //3
  let current = stack.top; //3

  while (current !== null) {//
    if (newStack.top === null) {
      newStack.push(stack.pop());
    } else if (current.data <= newStack.top.data) {
      newStack.push(stack.pop());
    } else if (current.data > newStack.top.data) {
      tempNum = stack.pop();
      while (newStack.top !== null || (newStack.top && tempNum > newStack.top.data)) {
        stack.push(newStack.pop());
      }
      newStack.push(tempNum);
    }
    current = stack.top;
  }

  return newStack;
}

const numStack = new Stack();

numStack.push(3);
numStack.push(4);
numStack.push(1);
numStack.push(2);
numStack.push(6);
numStack.push(5);


// const toDisplay = stackSort(numStack);
// console.log(display(toDisplay));

