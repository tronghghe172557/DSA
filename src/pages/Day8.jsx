import { Form, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { checkAlphabet, getFormFields, getTopic, handleAsci, longestCommonSubsequence, reduceString, sherlockAlphabet } from "../helpers/day8.helper";

function Day8() {
  const { bai } = useParams();
  const [form] = Form.useForm();
  const [result, setResult] = useState(null);

  // change result when i changed
  useEffect(() => {
    setResult(null);
  }, [bai]);

  // Solve topic
  let onFinish;
  try {
    onFinish = (values) => {
      console.log(values);
      switch (bai) {
        case "1":
          setResult(reduceString(values[`list1`]))
          break;
        case "2":
          setResult(handleAsci(values[`string`], parseInt(values[`shift`])))
          break;
        case "3":
          setResult(checkAlphabet(values[`string3`]))
          break;
        case "4":
          setResult(sherlockAlphabet(values[`string4`]))
          break;
        case "5":
          setResult(longestCommonSubsequence(values[`string5`], values[`string5-1`]))
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
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h1>Topic</h1>

        <div>
          <img
            style={{ width: "100%", marginBottom: "30px" }}
            src={getTopic(bai).link}
            alt={getTopic(bai).image}
          />
        </div>

        {/*  */}
        {getFormFields(bai)}

        {/*  */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Solve
          </Button>
        </Form.Item>
      </Form>

      <h4>Đáp án</h4>
      {/* <h3 id="result">{result}</h3> */}
      <h2 dangerouslySetInnerHTML={{ __html: result }} />
    </>
  );
}

export default Day8;
