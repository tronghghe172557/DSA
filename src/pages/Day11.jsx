import { Form, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createLinkedList, getFormFields, getTopic, printList, processData, reverse, sherlockAndAnagrams, sortedInsert, waiter } from "../helpers/day11.helper";
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
          setResult(sherlockAndAnagrams(values[`b1-s1`]))
          break;
        case "2":
          setResult(processData(values[`b2-s1`]))
          break;
        case "3":
          const list = JSON.parse(values[`b3-s1`])
          const number = values[`b3-s1`]
          setResult(printList(sortedInsert(createLinkedList(list, number))))
          break;
        case "4":
          const list4 = JSON.parse(values[`b4-s1`])
          const number4 = values[`b4-s1`]
          setResult("3")
          break;
        case "5":
          setResult(printList(reverse(createLinkedList([1, 2, 3, 4]))))
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
