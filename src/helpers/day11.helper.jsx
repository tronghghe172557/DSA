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
      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day10-2.png",
      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day10-3.png",
      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day10-4.png",
      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day10-5.png",
      };

    default:
      return `
        Không có đề bài
     `;
  }
};

export const twoSum = function(nums, target) {
  const map = {}; // Store number and its index
  console.log("Starting twoSum function...");
  console.log("nums:", nums, "target:", target);

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      console.log(`Index ${i}: num = ${nums[i]}, complement = ${complement}`);

      if (map.hasOwnProperty(complement)) {
          console.log(`Found complement! nums[${map[complement]}] + nums[${i}] = ${target}`);
          return [map[complement], i]; // Return indices
      }

      map[nums[i]] = i; // Store the index of the current number
      console.log("Map state:", map);
  }

  console.log("No solution found.");
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


