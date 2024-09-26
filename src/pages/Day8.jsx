import { Form, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { checkAlphabet, getFormFields, getTopic, handleAsci, longestCommonSubsequence, reduceString, sherlockAlphabet } from "../helpers/day8.helper";
import ShowAssignment from "../components/showAssignment";

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
      <ShowAssignment
        {...{ result, onFinish, getTopic, getFormFields, bai }}
      />
    </>
  );
}

export default Day8;
