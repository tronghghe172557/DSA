import { Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";

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
          initialValue={"aabb"}
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
          initialValue={"3\nuncle sam\n99912222\ntom\n11122222\nharry\n12299933\nuncle sam\nuncle tom\nharry"}
        >
          <Input />
        </Form.Item>,
      ];
    case "3":
      return [
        <Form.Item
          label="Bài 3"
          name="b3-s1"
          initialValue={
            "We promptly judged antique ivory buckles for the prize"
          }
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
            initialValue={"aabbccddeefghi"}
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
          initialValue={"HARRY"}
          rules={[{ required: true, message: "Please input Bài 5!" }]}
        >
          <Input />
        </Form.Item>,
        <Form.Item
          label="Selection"
          name="string5-1"
          initialValue={"SALLY"}
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
        link: "/assets/images/day9-1.png",
      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day9-2.png",
      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day9-3.png",
      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day9-4.png",
      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day9-5.png",
      };

    default:
      return `
        Không có đề bài
     `;
  }
};

export const romanToInt = function(s) {
  const romanMap = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50,
      'C': 100, 'D': 500, 'M': 1000
  };
  
  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
      let currentVal = romanMap[s[i]];
      let nextVal = romanMap[s[i + 1]];
      
      // If the current value is less than the next, subtract it; otherwise, add it
      if (currentVal < nextVal) {
          result -= currentVal;
      } else {
          result += currentVal;
      }
  }
  
  return result;
};


export function javaHashset(str) {
  let set = new Set();
  let words = str.split("\n");
  let T = parseInt(words[0].trim());

  for (let i = 1; i <= T; i++) {
    let pairKey = words[i].trim(); // Keep the pair as is (no sorting)
    set.add(pairKey);

    console.log(set.size); // Output the size of the set after each addition
  }
}


export function javaMap(str) {
  let map = new Map();
  let words = str.split("\n");
  let n = parseInt(words[0].trim());
  
  // Add the entries to the map
  for (let i = 1; i <= 2 * n; i += 2) {
    let key = words[i].trim();
    let value = words[i + 1].trim();
    
    if (/^\d{8}$/.test(value)) { // Check if the value is exactly 8 digits
      map.set(key, value);
    } else {
      console.log("Invalid phone number");
      return;
    }
  }

  // Process the queries
  for (let i = 2 * n + 1; i < words.length; i++) {
    let query = words[i].trim();
    
    if (map.has(query)) {
      console.log(`${query}=${map.get(query)}`);
    } else {
      console.log("Not found");
    }
  }
}
