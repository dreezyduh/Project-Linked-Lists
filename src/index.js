class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.nodeHead = null;
  }

  prepend(value) {
    let tmp = null;
    if (this.nodeHead !== null) tmp = this.nodeHead;
    this.nodeHead = new Node(value);
    this.nodeHead.nextNode = tmp;
  }

  append(value) {
    if (this.nodeHead === null) {
      this.prepend(value);
    } else {
      let tmp = this.nodeHead;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value);
    }
  }

  size() {
    let total = 0;
    let tmp = this.nodeHead;
    while (tmp !== null) {
      tmp = tmp.nextNode;
      total += 1;
    }
    return total;
  }

  head() {
    console.log(this.nodeHead);
    return this.nodeHead;
  }

  tail() {
    let tmp = this.nodeHead;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }
    console.log(tmp);
    return tmp;
  }
  //returns the node at the given index
  at(index) {
    let size = this.size();
    if (index > size) return console.log('Index bigger than actual size');
    let tmp = this.nodeHead;
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
    }
    console.log(tmp);
    return tmp;
  }
  //removes the last element from the list
  pop() {
    let size = this.size();
    if (size === 0) return console.log("Can't use pop() on an empty list");
    let cur = 1;
    let tmp = this.nodeHead;
    while (cur < size) {
      if (cur === size - 1) {
        tmp.nextNode = null;
        return;
      }
      cur++;
      tmp = tmp.nextNode;
    }
  }
  //returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let tmp = this.nodeHead;
    while (tmp !== null) {
      if (tmp.value === value) {
        return true;
      } else if (tmp.nextNode === null) {
        return false;
      } else {
        tmp = tmp.nextNode;
      }
    }
  }
  //returns the index of the node containing value, or null if not found.
  find(value) {
    let size = this.size();
    let tmp = this.nodeHead;
    for (let i = 0; i < size; i++) {
      if (i === size) return null;
      if (tmp.value === value) return `Value (${value}) found at index ${i}`;
      tmp = tmp.nextNode;
    }
  }
  //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let tmp = this.nodeHead;
    let string = '';
    while (tmp !== null) {
      string += `(${tmp.value}) -> `;
      tmp = tmp.nextNode;
    }
    string += `null`;
    return string;
  }
  //inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    let cur = this.nodeHead;
    let prev = null;
    let size = this.size();
    if (index > size) return console.log('Index is bigger than list size');

    let i = 0;
    if (i === index) {
      this.prepend(value);
      return;
    }

    while (cur !== null && i < index) {
      prev = cur;
      cur = cur.nextNode;
      i++;
    }

    if (cur !== null) {
      prev.nextNode = new Node(value, cur);
    }
  }
  //removes the node at the given index.
  removeAt(index) {
    let cur = this.nodeHead;
    let prev = null;
    let size = this.size();
    if (index > size) return console.log('Index is bigger than list size');

    let i = 0;

    if (i === index) {
      this.nodeHead = this.nodeHead.nextNode;
      return;
    }

    while (cur !== null && i < index) {
      prev = cur;
      cur = cur.nextNode;
      i++;
    }

    if (cur === null) return console.log('Cannot delete null');

    prev.nextNode = cur.nextNode;
  }
}

const d = new LinkedList();

d.append('capsuna');
d.append(7);
d.append('Tom Nook');
d.append(2);
d.append('astronaut');

console.log(d.toString());
console.log(d.size());
d.head();
d.tail();
d.at(6);
d.pop();
d.tail();
console.log(d.contains('capsuna'));
console.log(d.find('Tom Nook'));
console.log(d.toString());
d.removeAt(3);
console.log(d.toString());
d.insertAt('sugus', 1);
console.log(d.toString());
