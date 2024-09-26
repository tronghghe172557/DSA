import { Form, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowAssignment from "../components/showAssignment";
import { getFormFields, getTopic, javaHashset, javaMap, romanToInt } from "../helpers/day9.helper";

function Day9() {
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
          setResult(javaMap(values[`b1-s1`]))
          break;
        case "2":
          setResult(javaMap(values[`b2-s1`]))
          break;
        case "3":
          setResult(javaHashset(values[`b3-s1`]))
          break;
        case "4":
          setResult(romanToInt(values[`b4-s1`]))
          break;
        case "5":
          setResult(javaMap(values[`b5-s1`]))
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
      <ShowAssignment
        {...{ result, onFinish, getTopic, getFormFields, bai }}
      />
    </>
  );
}

export default Day9;
