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
          initialValue={"aabb"}
        >
          <Input />
        </Form.Item>,
        <Form.Item
          label="Bài 1 - List1"
          name="b1-s2"
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
          name="s2"
          rules={[{ required: true, message: "Please input Bài 2!" }]}
          initialValue={`2
abcd
abab`}
        >
          <Input.TextArea rows={5} />
        </Form.Item>,
      ];
    case "3":
      return [
        <Form.Item
          label="Bài 3"
          name="s3"
          initialValue={`3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`}
          rules={[{ required: true, message: "Please input Bài 3!" }]}
        >
          <Input.TextArea rows={10} />
        </Form.Item>,
      ];
    case "4":
      return [
        <>
          <Form.Item
            label="Bài 4"
            name="b4-s1"
            initialValue={"leetcode"}
            rules={[{ required: true, message: "Please input Bài 4!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bài 4"
            name="b4-s2"
            initialValue={"leet code"}
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
          name="b5"
          initialValue={["a","banana","app","appl","ap","apply","apple"]}
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
        link: "/assets/images/day10-1.png",
        linkAssignment:"https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true"

      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day10-2.png",
        linkAssignment:"https://www.hackerrank.com/challenges/string-construction/problem?isFullScreen=true"

      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day10-3.png",
        linkAssignment:"https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem"

      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day10-4.png",
        linkAssignment:"https://leetcode.com/problems/word-break/"

      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day10-5.png",
        linkAssignment:"https://leetcode.com/problems/longest-word-in-dictionary/"

      };

    default:
      return `
        Không có đề bài
     `;
  }
};

export function longestWord(words) {
  console.log(words)
  // Sắp xếp mảng `words` theo thứ tự từ điển
  words.sort();

  // Tạo set để lưu trữ các từ đã được xây dựng
  const builtWords = new Set();
  let longest = "";

  // Duyệt qua từng từ trong `words`
  for (let word of words) {
    // Nếu từ là đơn ký tự hoặc phần trước của từ đã tồn tại trong set
    if (word.length === 1 || builtWords.has(word.slice(0, -1))) {
      builtWords.add(word); // Thêm từ vào set

      // Kiểm tra và cập nhật từ dài nhất
      if (word.length > longest.length) {
        longest = word;
      }
    }
  }

  return longest;
}

export const wordBreak = (s, wordDict) => {
  const table = new Array(s.length + 1).fill(false);
  table[0] = true;

  // Iterate over the string
  for (let i = 0; i < table.length; i++) {
    if (!table[i]) continue;

    for (let j = i + 1; j <= s.length; j++) {
      if (wordDict.includes(s.slice(i, j))) {
        table[j] = true;
      }
    }
  }

  return table[s.length];
};

// export function wordBreak(s, wordDict) {
//   const table = new Array(s.length + 1).fill(false);
//   table[0] = true; // Chuỗi rỗng luôn có thể phân tách
//   console.log("Bảng khởi tạo:", table);

//   // Duyệt qua chuỗi
//   for (let i = 0; i < table.length; i++) {
//     if (!table[i]) {
//       console.log(`Bỏ qua vị trí ${i} vì không thể tạo từ hợp lệ.`);
//       continue; // Bỏ qua nếu vị trí hiện tại không thể tạo từ hợp lệ
//     }

//     console.log(`Đang xử lý vị trí ${i}`);

//     // Kiểm tra tất cả các chuỗi con bắt đầu từ vị trí i
//     for (let j = i + 1; j <= s.length; j++) {
//       const substring = s.slice(i, j);
//       console.log(`Kiểm tra chuỗi con: "${substring}" từ ${i} đến ${j} `);

//       if (wordDict.includes(substring)) {
//         table[j] = true; // Đánh dấu vị trí j có thể tạo thành chuỗi hợp lệ
//         console.log(`Chuỗi "${substring}" là từ hợp lệ. Đánh dấu table[${j}] : ${s.charAt(j)} = true`);
//       }
//     }

//     console.log("Bảng hiện tại:", table);
//   }

//   console.log("Bảng cuối cùng:", table);
//   return table[s.length]; // Trả về kết quả, xem chuỗi có thể được phân tách không
// }

export const countCharacter = (s) => {
  const lines = s.split(`\n`);

  return lines
    .slice(1)
    .map((line) => {
      return countCharacterNoRepeat(line);
    })
    .join(`\n`)
    .replace(/\n/g, "<br />");
};

const countCharacterNoRepeat = (line) => {
  // hello
  const set = new Set(line);

  return set.size;
};

export const tutorialMap = (input) => {
  const map = new Map();
  let result = [];

  // split the input once
  const lines = input.split("\n");
  const numOfEntries = parseInt(lines[0], 10);

  // Iterate over the lines once
  lines.slice(1).forEach((item, index) => {
    if (index < numOfEntries) {
      const [key, value] = item.split(" ");
      map.set(key, value);
    } else {
      result.push(map.get(item) ? `${item}=${map.get(item)}` : `Not found`);
    }
  });

  // console.log(result.join(`<br />`))
  return result.join("\n").replace(/\n/g, "<br />");
};

export const twoStrings = (s1, s2) => {
  const set1 = new Set(s1);

  for (const char of s2) {
    if (set1.has(char)) {
      return "YES";
    }
  }

  return "NO";
};
