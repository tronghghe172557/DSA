import { Form, Input } from "antd";

// 1 method
export const getFormFields = (bai) => {
  switch (bai) {
    case "1":
      return [
        // Form fields for bai 1
        <Form.Item
          label="Bài 1 - List1"
          name="b1-s1"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
          initialValue={"cdcd"}
        >
          <Input />
        </Form.Item>,
      ];
    case "2":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Bài 2 - String"
          name="b2-s1"
          rules={[{ required: true, message: "Please input Bài 2!" }]}
          initialValue={"10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2"}
        >
          <Input.TextArea rows={5} />
        </Form.Item>,
      ];
    case "3":
      return [
        <Form.Item
          label="Bài 3"
          name="b3-s1"
          initialValue={`[1, 3, 4, 10]`}
          rules={[{ required: true, message: "Please input Bài 3!" }]}
        >
          <Input/>
        </Form.Item>,
        <Form.Item
          label="Bài 3"
          name="b3-s2"
          initialValue={`5`}
          rules={[{ required: true, message: "Please input Bài 3!" }]}
        >
          <Input/>
        </Form.Item>,
      ];
    case "4":
      return [
        <>
          <Form.Item
            label="Bài 4"
            name="b4-s1"
            initialValue={"[2, 3, 4, 5, 6, 7]"}
            rules={[{ required: true, message: "Please input Bài 4!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bài 4"
            name="b4-s2"
            initialValue={"3"}
            rules={[{ required: true, message: "Please input Bài 4!" }]}
          >
            <Input />
          </Form.Item>
        </>,
      ];
    case "5":
      return [
        // Form fields for bai 2
        <Form.Item
          label="String"
          name="b5-s1"
          initialValue={"[1, 2, 3, 4]"}
          rules={[{ required: true, message: "Please input Bài 5!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    default:
      return [
        // Default form fields
        <Form.Item
          label="Default Field"
          name="defaultField"
          rules={[{ required: true, message: "Please input default field!" }]}
        >
          <Input />
        </Form.Item>,
      ];
  }
};

// 1 method
export const getTopic = (bai) => {
  switch (bai) {
    case "1":
      return {
        image: "image",
        link: "/assets/images/day11-1.png",
      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day11-2.png",
      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day11-3.png",
      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day11-4.png",
      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day11-5.png",
      };

    default:
      return `
        Không có đề bài
     `;
  }
};


export class DoublyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export function reverse(llist) {
  // Write your code here
  let current = llist;
  let prev = null;
  while (current !== null) {
      let next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
  }
  return prev;
}

export function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new DoublyLinkedListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new DoublyLinkedListNode(arr[i]);
    current = current.next;
  }
  return head;
}

export function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.data);
    head = head.next;
  }
  return result.join(" -> ");
}

export function waiter(number, q) {
  function primeArray(q) {
    let primes = [];
    let num = 2;
    while (primes.length < q) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  }

  let primes = primeArray(q);
  let answer = [];
  let A = number;

  for (let i = 0; i < q; i++) {
    let prime = primes[i];
    let A_next = [];
    let B = [];

    while (A.length > 0) {
      let top = A.pop();
      if (top % prime === 0) {
        B.push(top);
      } else {
        A_next.push(top);
      }
    }

    answer = answer.concat(B.reverse());
    A = A_next;
  }

  answer = answer.concat(A.reverse());

  return answer;
}


export function sortedInsert(llist, data) {
  // Write your code here
  let newNode = new DoublyLinkedListNode(data);
  if (llist === null) {
    llist = newNode;
    return llist;
  }
  if (llist.data >= data) {
    newNode.next = llist;
    llist.prev = newNode;
    return newNode;
  }
  let current = llist;
  while (current.next !== null && current.next.data < data) {
    current = current.next;
  }
  newNode.next = current.next;
  newNode.prev = current;
  current.next = newNode;
  if (newNode.next !== null) {
    newNode.next.prev = newNode;
  }
  return llist;
}

export function processData(input) {
  //Enter your code here
  let words = input.split("\n");
  let n = parseInt(words[0].trim());
  if (n !== words.length - 1) {
    return "Invalid input";
  }
  let queue = [];
  for (let i = 1; i <= n; i++) {
    switch (words[i].split(/\s+/g)[0]) {
      case "1":
        queue.push(parseInt(words[i].split(/\s+/g)[1]));
        break;
      case "2":
        if (queue.length > 0) queue.shift();
        break;
      case "3":
        if (queue.length > 0) console.log(queue[0]);
        break;
      default:
        return "Invalid command";
    }
  }

  return queue.join(" ")
}

export function sherlockAndAnagrams(s) {
  // Write your code here
  let count = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let str = s
        .slice(i, j + 1)
        .split("")
        .sort()
        .join("");
      if (map.has(str) && str !== "") {
        map.set(str, map.get(str) + 1);
      } else {
        map.set(str, 1);
      }
    }
  }
  for (let value of map.values()) {
    count += (value * (value - 1)) / 2;
  }
  return count;
}

export const twoSum = function (l1, l2) {
  let memory = 0;
  let result = [];
  const maxLength = Math.length(l1.length, l2.length);

  for (let i = 0; i < maxLength; i++) {
    // Extract the current values, default to 0 if out of bounds
    let num1 = i < l1.length ? parseInt(l1[i]) : 0;
    let num2 = i < l2.length ? parseInt(l2[i]) : 0;

    // Calculate the sum of the two numbers plus carry
    let sum = num1 + num2 + memory;

    // Determine the new digit and the carry
    memory = Math.floor(sum / 10);
    result.push(sum % 10);
  }

  if (memory) {
    result.push(memory);
  }

  return result.join(" ");
};

export const sherlockAlphabet = (s) => {
  const map = new Map();

  // find frequency
  s.toLowerCase()
    .split("")
    .forEach((element) => {
      // map.set(element, map.get(element) ? map.get(element) + 1 : 0);
      map.set(element, (map.get(element) || 0) + 1);
    });

  //
  let sequences = Array.from(map.values());
  console.log(sequences);
  //
  let min = Math.min(...sequences);
  let max = Math.max(...sequences);
  let countMax = 0,
    countMin = 0;
  //
  let flag = true;
  //
  sequences.forEach((it) => {
    if (it == max) {
      countMax += 1;
    } else if (it == min) {
      countMin += 1;
    } else {
      flag = false;
    }
  });

  if (!flag) {
    return "NO";
  }
  //
  //
  if (max - min > 1) {
    flag = false;
  } else if (max - min == 1 && flag) {
    //
    if (countMax != 1 && countMin != 1) {
      flag = false;
    }
  }

  if (min == 1 && countMin == 1) {
    flag = true;
  }

  console.log(max, countMax, min, countMin, flag);

  return flag ? "YES" : "NO";
};
