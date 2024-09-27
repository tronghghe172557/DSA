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
          name="list1"
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
          name="string"
          rules={[{ required: true, message: "Please input Bài 2!" }]}
          initialValue={"middle-Outz"}
        >
          <Input />
        </Form.Item>,
        // Form fields for bai 2
        <Form.Item
          label="Bài 2 - Shift"
          name="shift"
          rules={[{ required: true, message: "Please input Bài 2!" }]}
          initialValue={"2"}
        >
          <Input />
        </Form.Item>,
      ];
    case "3":
      return [
        <Form.Item
          label="Bài 3"
          name="string3"
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
            name="string4"
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
          name="string5"
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
        link: "/assets/images/day8-1.png",
        linkAssignment:"https://www.hackerrank.com/challenges/reduced-string"

      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day8-2.png",
        linkAssignment:"https://www.hackerrank.com/challenges/caesar-cipher-1"

      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day8-3.png",
        linkAssignment:"https://www.hackerrank.com/challenges/pangrams"

      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day8-4.png",
        linkAssignment:"https://www.hackerrank.com/challenges/sherlock-and-valid-string"

      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day8-5.png",
        linkAssignment:"https://www.hackerrank.com/challenges/common-child"

      };

    default:
      return `
        Không có đề bài
     `;
  }
};

export const longestCommonSubsequence = (s1, s2) => {
  const m = s1.length;
  const n = s2.length;

  // Tạo bảng dp kích thước (m+1) x (n+1) và khởi tạo tất cả giá trị là 0
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Điền bảng dp dựa trên quy hoạch động
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Truy vết lại chuỗi con chung dài nhất từ bảng dp
  let lcs = "";
  let i = m,
    j = n;
  while (i > 0 && j > 0) {
    if (s1[i - 1] === s2[j - 1]) {
      lcs = s1[i - 1] + lcs;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs;
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

export const checkAlphabet = (s) => {
  const map = new Map();

  s.toLowerCase()
    .split("")
    .forEach((element) => {
      if (element >= "a" && element <= "z") {
        map.set(element, element);
      }
    });

  // return Array.from(map).length == 26 ? "pangram" : "not pangram";
  return map.size == 26 ? "pangram" : "not pangram";
};

export const handleAsci = (string, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // alphabet size
  const alphabetSize = alphabet.length;
  // handle element
  return string
    .split("")
    .map((char) => {
      //
      const isLower = char >= "a" && char <= "z";
      const upperLower = char >= "A" && char <= "Z";
      //
      if (isLower || upperLower) {
        const base = isLower ? "a" : "A";
        // find SHIFT of character
        return String.fromCharCode(
          ((char.charCodeAt(0) - base.charCodeAt(0) + shift) % alphabetSize) +
            base.charCodeAt(0)
        );
      }
      // Return non-alphabetic characters unchanged
      return char;
    })
    .join("");
};

export const reduceString = (string) => {
  let newArr = string.split("");

  let i = 0;
  while (i < newArr.length) {
    if (newArr[i] == newArr[i + 1] && newArr[i]) {
      newArr.splice(i, 2);
      i--;
    } else {
      i++;
    }
  }

  return newArr == 0 ? "Empty String" : newArr.join(" ");
};
