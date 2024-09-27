import { Form, Input } from "antd";

// 1 method
export const getFormFields = (bai) => {
  switch (bai) {
    case "1":
      return [
        // Form fields for bai 1
        <Form.Item
          label="Bài 1 - Tree 1"
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
          initialValue={`1 2 5 3 6 4`}
        >
          <Input />
        </Form.Item>,
      ];
    case "3":
      return [
        <Form.Item
          label="Bài 3"
          name="b3-s1"
          initialValue={`4 2 3 1 7 6`}
          rules={[{ required: true, message: "Please input Bài 3!" }]}
        >
          <Input />
        </Form.Item>,
        <Form.Item
          label="Bài 3"
          name="b3-s2"
          initialValue={`1 7`}
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
            initialValue={"[1,2,3,null,5]"}
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
          initialValue={"[1,3,null,null,2]"}
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
        link: "/assets/images/day13-1.png",
        linkAssignment:"https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree"

      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day13-2.png",
        linkAssignment:"https://www.hackerrank.com/challenges/tree-level-order-traversal"

      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day13-3.png",
        linkAssignment:"https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor"

      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day13-4.png",
        linkAssignment:"https://leetcode.com/problems/binary-tree-paths/"

      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day13-5.png",
        linkAssignment:"https://leetcode.com/problems/recover-binary-search-tree/"

      };

    default:
      return `
        Không có đề bài
     `;
  }
};

