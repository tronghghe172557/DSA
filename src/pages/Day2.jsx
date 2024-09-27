import { Form, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowAssignment from "../components/showAssignment";
import { findSmallestOnlyZeroAndNine, findSum, getFormFields, getTopic, snakeHand, solveBus, strangeGrid } from "../helpers/day2.helper";

function Day2() {
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
          const [r, c] =values[`b1-s1`].split(" ").map(it => parseInt(it))
          setResult(strangeGrid(r, c))
          break;
        case "2":
          setResult(snakeHand(parseInt(values[`b2-s1`])))
          break;
        case "3":
          setResult(findSmallestOnlyZeroAndNine(parseInt(values[`b3-s1`])))
          break;
        case "4":
          setResult(findSum(parseInt(values[`b4-s1`])))
          break;
        case "5":
          setResult(solveBus(values[`b5-s1`].split(" ")))

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

export default Day2;
