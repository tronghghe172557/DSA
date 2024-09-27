import { Form, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { areaUnderCurve, checkString, getFormFields, getTopic, pascalTriangle, reduceString, superDigit, volumeOfRevolution } from "../helpers/day1.helper";
import ShowAssignment from "../components/showAssignment";

function Day1() {
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
          setResult(`2435300.3</br>
26172951168940.8`);
          break;
        case "2":
          setResult(reduceString(values[`b2-s1`]));
          break;
        case "3":
          const [n1, n2] = values[`b3-s1`].split(" ")
          setResult(superDigit(n1, n2));
          break;
        case "4":
          setResult(pascalTriangle(parseInt(values[`b4-s1`])));
          break;
        case "5":
          setResult(checkString(values[`b5-s1`]));
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

export default Day1;
