import { Form, Input } from "antd";

// 1 method
export const getFormFields = (bai) => {
  switch (bai) {
    case "1":
      return [
        // Form fields for bai 1
        <Form.Item
          label="Bài 1 - Array"
          name="b1-s1"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
          initialValue={"6 3"}
        >
          <Input />
        </Form.Item>,
      ];
    case "2":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Bài 2 - Number"
          name="b2-s1"
          rules={[{ required: true, message: "Please input Bài 2!" }]}
          initialValue={`3`}
        >
          <Input />
        </Form.Item>,
      ];
    case "3":
      return [
        <Form.Item
          label="Bài 3 - Special Multiple"
          name="b3-s1"
          initialValue={`5`}
          rules={[{ required: true, message: "Please input Bài 3!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    case "4":
      return [
        <>
          <Form.Item
            label="Bài 4"
            name="b4-s1"
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
          initialValue={"1 2 1 1 1 2 1 3"}
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
        link: "/assets/images/day2-1.png",
        linkAssignment:
          "https://www.hackerrank.com/challenges/strange-grid/problem",
      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day2-2.png",
        linkAssignment:
          "https://www.hackerrank.com/challenges/handshake/problem",
      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day2-3.png",
        linkAssignment:
          "https://www.hackerrank.com/challenges/special-multiple/problem",
      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day2-4.png",
        linkAssignment:
          "https://www.hackerrank.com/challenges/summing-the-n-series/problem",
      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day2-5.png",
        linkAssignment:
          "https://www.hackerrank.com/challenges/bus-station/problem",
      };

    default:
      return `
        Không có đề bài
     `;
  }
};

// bai 1
export function strangeGrid(r, c) {
  if (c >= 1 && c <= 5 && r >= 1) {
    if (r % 2 != 0) {
      return (Math.ceil(r / 2) - 1) * 10 + 2 * (c - 1);
    } else {
      return (Math.ceil(r / 2) - 1) * 10 + 1 + 2 * (c - 1);
    }
  } else return "";
}

// bai 5
export function solveBus(groups) {
  groups = groups.map((it) => parseInt(it));
  let result = [];
  const n = groups.length;

  const totalPeople = groups.reduce((acc, num) => acc + num, 0);

  const divisors = [];
  for (let x = 1; x <= totalPeople; x++) {
    if (totalPeople % x === 0) {
      divisors.push(x);
    }
  }

  divisors.forEach((busSize) => {
    let currentSum = 0;
    let valid = true;

    for (let i = 0; i < n; i++) {
      currentSum += groups[i];

      if (currentSum > busSize) {
        valid = false;
        break;
      }

      if (currentSum === busSize) {
        currentSum = 0;
      }
    }

    if (valid && currentSum === 0) {
      result.push(busSize);
    }
  });

  console.log(result);

  return result.join(" ");
}

// bai 4
export function findSum(n) {
  // Tính tổng S_n = n^2
  const sum = n * n;

  // Tính phần dư khi chia cho 10^9 + 7
  const mod = 10 ** 9 + 7;
  const result = sum % mod;

  return result;
}

// bai3
export const findSmallestOnlyZeroAndNine = (n) => {
  let smallest = 9;
  while (smallest < 100000) {
    if (smallest % n == 0 && checkNumberOnlyZeroAndNine(smallest)) {
      return smallest;
    }
    smallest++;
  }
  return -1;
};

const checkNumberOnlyZeroAndNine = (smallest) => {
  while (smallest > 0) {
    const digit = smallest % 10;
    if (digit !== 0 && digit !== 9) {
      return false;
    }
    smallest = Math.floor(smallest / 10);
  }
  return true;
};

//bai 2
export function snakeHand(attends) {
  let snakeHands = 0;
  for (let i = 1; i < attends; i++) {
    snakeHands += i;
  }

  return snakeHands;
}
