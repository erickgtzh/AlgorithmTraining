class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  
  empty() {
    return this.size === 0;
  }
  
  enqueue(value) {
    const newNode = new Node(value);
    if(this.empty()) {
      this.front = newNode;
      this.back = newNode;
    } else { 
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }
  
  dequeue() {
    if(!this.size) return null;
    const top = this.front;
    this.front = this.front.next;
    this.size--;
    top.next = null;
    // if(this.empty()) this.back = null;
    
    return top.value;
  }
}

class MyStack {
  constructor() {
    this.queue = new MyQueue();
  }


  /** 
   * @param {number} x
   * @return {void}
   */
  push (x) {
    let lenToRotate = this.queue.size;
    this.queue.enqueue(x);

    while(lenToRotate) {
      this.queue.enqueue(this.queue.dequeue());
      lenToRotate--;
    }
  };

  /**
   * @return {number}
   */
  pop() {
    return this.queue.dequeue();
  };

  /**
   * @return {number}
   */
  top() {
      return this.queue.back.value;
  };

  /**
   * @return {boolean}
   */
  empty() {
      return this.queue.length === 0;
  };
}
/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var tester = function() {
    var stack = new MyStack();
    stack.push(1);
    stack.push(2);

    console.log(stack.queue);
    // console.log(stack.top());
    // console.log(stack.pop());
    console.log(stack.queue);
}

tester();