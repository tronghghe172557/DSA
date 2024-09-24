import { Form, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countCharacter, getFormFields, getTopic, longestWord, tutorialMap, twoStrings, wordBreak } from "../helpers/day10.helper";

function Day10() {
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
          setResult(twoStrings(values[`b1-s1`], values[`b1-s2`]))
          break;
        case "2":
          setResult(countCharacter(values[`s2`]))
          break;
        case "3":
          setResult(tutorialMap(values[`s3`]))
          break;
        case "4":
          setResult(wordBreak(values[`b4-s1`], values[`b4-s2`].split(" ")))
          break;
        case "5":
          setResult(Array.from(longestWord(values[`b5`])))
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

export default Day10;
