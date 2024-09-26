import { Form, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormFields, getTopic, twoSum } from "../helpers/day11.helper";
import ShowAssignment from "../components/showAssignment";

function Day11() {
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
          setResult(twoSum(values[`b1-s1`].split(" "), values[`b1-s2`].split(" ")))
          break;
        case "2":
          break;
        case "3":
          break;
        case "4":
          break;
        case "5":
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

export default Day11;
