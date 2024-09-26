class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  // print
  print() {
    if (!this.head) {
      console.log("The list is empty.");
      return;
    }

    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }

  getSize() {
    console.log(this.size);
  }

  addSize(size) {
    this.size = this.size + size;
  }

  // sort
  sortAsc() {
    // l1: 3 4 5 6 7
    // l2: 1 2 3 4
    //  lm: 3 4 5 6 7 1 2 3 4
    let currentFor = this.head;

    for (let i = 0; currentFor.next; i++) {
      // assign min = head
      let currentWhile = currentFor;
      let min = currentFor.value;
      //
      while (currentWhile.next) {
        // map each node
        currentWhile = currentWhile.next;
        // swap value min with current node
        if (min > currentWhile.value) {
          let temp = min;
          min = currentWhile.value;
          currentWhile.value = temp;
        }
      }

      // assign value currentFor = min
      currentFor.value = min;
      // next node
      currentFor = currentFor.next;
    }

    this.print();
  }

  //
  getList() {
    if (!this.head) {
      return "The list is empty.";
      return;
    }

    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    return result + "null";
  }

  // remove similar node
  distinctNode() {
    let currentFor = this.head;

    while (currentFor != null && currentFor.next) {
      // assign repeat = head
      let currentWhile = currentFor;

      while (currentWhile?.next) {
        // change node next when repeat node
        if (currentFor.value == currentWhile.next.value) {
          currentWhile.next = currentWhile.next.next;
        } else {
          // map each node
          currentWhile = currentWhile.next;
        }
      }

      // next node
      currentFor = currentFor.next;
    }

    return this.getList();
  }

  reverse() {
    let prev = null; // Previous node (starts as null)
    let current = this.head; // Current node (starts as head)

    while (current !== null) {
      let nextNode = current.next; // Store the next node
      current.next = prev; // Reverse the `next` pointer

      // Move `prev` and `current` one step forward
      prev = current;
      current = nextNode;
    }

    this.head = prev;
  }

  swapTwoNodes() {
    let current = this.head;

    while (current.next) {
      // swap value
      let temp = current.next.value;
      current.next.value = current.value;
      current.value = temp;

      // move current
      current = current.next.next;

      if (!current) {
        break;
      }
    }
  }
}

export const merge = (list1, list2) => {
  let current = list1.head;
  // find last node in list 1
  while (current.next) {
    current = current.next;
  }

  // merge last node 1 with head of list 2
  current.next = list2.head;

  // add size
  list1.addSize(list2.size);

  // l1: 3 4 5 6 7
  // l2: 1 2 3 4
  //  lm: 3 4 5 6 7 1 2 3 4
  list1.sortAsc();

  // l1: 3 4 5 6 7
  // l2: 1 2 3 4
  //  lm: 3 4 5 6 7 1 2 3 4
  return list1.getList();
};

export const createLinkedList = (list) => {
  const linkedList = new LinkedList();

  list.forEach((it) => {
    linkedList.add(it);
  });

  return linkedList;
};
