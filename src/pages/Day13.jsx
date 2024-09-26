import { Form, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormFields, getTopic } from "../helpers/day13.helper";
import {
  BFS,
  buildTree,
  convertArrayToTree,
  heightOfTree,
  lowestCommonAncestor,
  recoverBST,
} from "../helpers/tree.helper";
import ShowAssignment from "../components/showAssignment";

function Day13() {
  const { bai } = useParams();
  const [form] = Form.useForm();
  const [result, setResult] = useState(null);
  const [iterateTree, setIterateTree] = useState(null);

  // change result when i changed
  useEffect(() => {
    setResult(null);
    setIterateTree(null)
  }, [bai]);

  // Solve topic
  let onFinish;
  try {
    onFinish = (values) => {
      console.log(values);
      switch (bai) {
        case "1":
          //
          const tree = convertArrayToTree(values[`b1-s1`].split(" "));
          // add result
          setResult(heightOfTree(tree));
          break;
        case "2":
          //
          const tree2 = convertArrayToTree(values[`b2-s1`].split(" "));
          // add result
          setResult(BFS(tree2));
          setIterateTree("BFS - BREADTH FIRST SEARCH")
          break;
        case "3":
          //
          const tree3 = convertArrayToTree(values[`b3-s1`].split(" "));
          //
          const [v1, v2] = values[`b3-s2`].split(" ");
          // add result
          setResult(lowestCommonAncestor(tree3, parseInt(v1), parseInt(v2)));
          break;
        case "4":
          const tree4 = buildTree(JSON.parse(values[`b4-s1`]));
          //
          setResult(tree4.calculatePaths());
          break;
        case "5":
          const tree5 = buildTree(JSON.parse(values[`b5-s1`]));

          setResult(BFS(recoverBST(tree5)));
          setIterateTree("BFS - BREADTH FIRST SEARCH")
          break;
        default:
          break;
      }
    };
  } catch (error) {
    setResult("Nhập linh tinh à");
  }

  return (
    <>
      {/* <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h1>Topic</h1>

        <div>
          <img
            style={{ width: "100%",height: "80%", marginBottom: "30px" }}
            src={getTopic(bai).link}
            alt={getTopic(bai).image}
          />
        </div>

        {getFormFields(bai)}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Solve
          </Button>
        </Form.Item>
      </Form>

      {iterateTree && <h4>Duyệt Tree bằng {iterateTree}</h4>}
      <h4>Đáp án</h4>
      <h2 dangerouslySetInnerHTML={{ __html: result }} /> */}
      <ShowAssignment result={result} onFinish={onFinish} getTopic={getTopic} getFormFields={getFormFields} iterateTree={iterateTree} bai={bai}  />
    </>
  );
}

export default Day13;
