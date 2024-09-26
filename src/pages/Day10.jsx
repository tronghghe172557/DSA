import { Form, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countCharacter, getFormFields, getTopic, longestWord, tutorialMap, twoStrings, wordBreak } from "../helpers/day10.helper";
import ShowAssignment from "../components/showAssignment";

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
      <ShowAssignment
        {...{ result, onFinish, getTopic, getFormFields, bai }}
      />
    </>
  );
}

export default Day10;
