class LinkedList {
  constructor() {
    this.head = null;
  }
  
  prepend(value) {
    this.head = new Node(value, this.head)
  }
  
  append(value) {
    if (this.head === null) {
      this.prepend(value);
    } else {  
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node (value, null);
    }
  }
  
  toString() {
    let temp = this.head;
    let message = '';
    while (temp !== null) {
      message += `( ${temp.value} ) -> `;
      temp = temp.next;
    }
    message += 'null';
    console.log(message);
  }
  
  size() {
    let temp = this.head;
    let counter = 0;
    while (temp !== null) {
      temp = temp.next;
      counter++;
    }
    console.log(counter);
  }
  
  getHead() {
    console.log(this.head.value);
  }
  
  getTail() {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    console.log(temp.value);
  }
  
  at(index) {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    console.log(temp.value);
  }
  
  pop() {
    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
  }
  
  contains(value) {
    let temp = this.head;
    while (temp.next !== null) {
      if (temp.value === value) {
        console.log('true');
        return true;
      }
      temp = temp.next;
    }
    console.log('false');
    return false;
  }
  
  find(value) {
    let index = 0;
    let temp = this.head;
    while (temp !== null) {
      if (temp.value === value) {
        console.log(index);
        return index;
      } else {
        index++;
        temp = temp.next;
      }
    }
    console.log('null');
    return null;
  }
  
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else {
      let previous = null;
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        previous = temp;
        temp = temp.next;
        if (temp === null) throw new Error('The index you want to insert at does not exist');
      }
      previous.next = new Node(value, temp);
    }
  }
  
  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let previous = null;
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        previous = temp;
        temp = temp.next;
        if (temp === null) throw new Error('The index you want to remove does not exist');
      }
      previous.next = temp.next;
    }
  }  
}


class Node {
  constructor (value=null, next=null) {
    this.value = value;
    this.next = next;
  }
}


//Testing

const list = new LinkedList();
list.append('hello');
list.prepend('again');
list.prepend('first');
list.append('last');
list.append('realLast');
list.toString();

list.pop();
list.toString();

list.size();
list.getHead();
list.getTail();

list.at(3);

list.contains('hello');

list.find('last');

list.insertAt('test', 3);

list.toString();

list.removeAt(2);

list.toString();
