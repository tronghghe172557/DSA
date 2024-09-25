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
          initialValue={"1 2 3 4 5"}
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
          initialValue={`3`}
        >
          <Input />
        </Form.Item>,
        <Form.Item
          label="Bài 2 - String"
          name="b2-s2"
          rules={[{ required: true, message: "Please input Bài 2!" }]}
          initialValue={`1 2 3 4`}
        >
          <Input />
        </Form.Item>,
      ];
    case "3":
      return [
        <Form.Item
          label="Bài 3"
          name="b3-s1"
          initialValue={`1 2 3 4 5 6 7 8 9`}
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
            initialValue={"leetcode"}
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
          initialValue={["a", "banana", "app", "appl", "ap", "apply", "apple"]}
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
        link: "/assets/images/day12-1.png",
      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day6-2.png",
      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day12-3.png",
      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day12-4.png",
      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day12-5.png",
      };

    default:
      return `
        Không có đề bài
     `;
  }
};

export const powerOfFour = (n) => {
  if(n == 0) {
    return false;
}

while (n) {
    // console.log(n)
    if (n % 4 != 0 && n != 1) {
        return false
    }

    n = Math.floor(n / 4);
}

return true;
}

export const lastRemaining = (arr) => {
  let left = true;

  while (arr.length > 1) {
    let newArr = [];

    if (left) {
      // iterate element LEFT TO RIGHT about index % 2 == 1
      for (let i = 1; i < arr.length; i += 2) {
        newArr.push(arr[i]);
      }
      console.log(newArr)
    } else {
      // index begin 1 if arr.length is even number or 0 if it is odd number
      for (let i = arr.length % 2 === 0 ? 0 : 1; i < arr.length; i += 2) {
        newArr.push(arr[i]); // give element RIGHT to LEFT
      }
      console.log(newArr)
    }

    arr = newArr;
    left = !left;
    console.log(left)
  }

  return arr[0]
};
