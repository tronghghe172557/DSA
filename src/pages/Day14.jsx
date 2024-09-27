import { Form, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowAssignment from "../components/showAssignment";
import { climbStairs, countBits, generate, getFormFields, getTopic, isSubsequence, maxProfit } from "../helpers/day14.helper";

function Day14() {
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
          setResult(climbStairs(parseInt(values[`b1-s1`])));
          break;
        case "2":
          setResult(generate(parseInt(values[`b2-s1`])));
          break;
        case "3":
          setResult(countBits(parseInt(values[`b3-s1`])));

          break;
        case "4":
          setResult(isSubsequence(values[`b4-s1`], values[`b4-s2`]));

          break;
        case "5":
          setResult(maxProfit(JSON.parse(values[`b5-s1`])));

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
      <ShowAssignment {...{ result, onFinish, getTopic, getFormFields, bai }} />
    </>
  );
}

export default Day14;
