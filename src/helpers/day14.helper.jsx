import { Form, Input } from "antd";

// 1 method
export const getFormFields = (bai) => {
  switch (bai) {
    case "1":
      return [
        // Form fields for bai 1
        <Form.Item
          label="Bài 1 - Number"
          name="b1-s1"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
          initialValue={"3"}
        >
          <Input />
        </Form.Item>,
      ];
    case "2":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Bài 2 - number"
          name="b2-s1"
          rules={[{ required: true, message: "Please input Bài 2!" }]}
          initialValue={`4`}
        >
          <Input />
        </Form.Item>,
      ];
    case "3":
      return [
        <Form.Item
          label="Bài 3 - number"
          name="b3-s1"
          initialValue={`5`}
          rules={[{ required: true, message: "Please input Bài 3!" }]}
        >
          <Input />
        </Form.Item>
      ];
    case "4":
      return [
        <>
          <Form.Item
            label="Bài 4 - s1"
            name="b4-s1"
            initialValue={"abc"}
            rules={[{ required: true, message: "Please input Bài 4!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bài 4 - t1"
            name="b4-s2"
            initialValue={"ahbgdc"}
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
          initialValue={"[7,1,5,3,6,4]"}
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
        link: "/assets/images/day14-1.png",
      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day14-2.png",
      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day14-3.png",
      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day14-4.png",
      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day14-5.png",
      };

    default:
      return `
        Không có đề bài
     `;
  }
};

export const maxProfit = function(prices) {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
      if (buyPrice > prices[i]) {
          buyPrice = prices[i];
      }

      profit = Math.max(profit, prices[i] - buyPrice);
  }

  return profit;    
};

export function isSubsequence(s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
      if (s[i] === t[j]) {
          i++;
      }
      j++;
  }

  return i === s.length;
}


export function countBits(n) {
  let array = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
      array[i] = binary(i);
  }

  return array;
}

function binary(i) {
  let total = 0;

  while (i > 0) {
      if (i % 2 === 1) {
          total++;
      }
      i = Math.floor(i / 2);
  }

  return total;
}


export const generate = function(numRows) {
  const res = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
      const dummyRow = [0, ...res[res.length - 1], 0];
      const row = [];

      for (let j = 0; j < dummyRow.length - 1; j++) {
          row.push(dummyRow[j] + dummyRow[j + 1]);
      }

      res.push(row);
  }

  return res;    
};

export const climbStairs = (n) => {
  if (n === 0 || n === 1) {
      return 1;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

