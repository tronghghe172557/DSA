import { Form, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormFields, getTopic, lastRemaining, powerOfFour } from "../helpers/day12.helper";
import { createLinkedList, merge } from "../helpers/linkedList.helper";
import ShowAssignment from "../components/showAssignment";

function Day12() {
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
          const linkedList = createLinkedList(values[`b1-s1`].split(" "));
          //
          linkedList.reverse()
          //
          setResult(linkedList.getList())
          break;
        case "2":
          const linkedlist1 = createLinkedList(values[`b2-s1`].split(" "));
          const linkedlist2 = createLinkedList(values[`b2-s2`].split(" "));

          setResult(merge(linkedlist1, linkedlist2));
          break;
        case "3":
          setResult(lastRemaining(values[`b3-s1`].split(" ")));
          break;
        case "4":
          setResult(powerOfFour(parseInt(values[`b4-s1`])));
          break;
        case "5":
          const linkedListBai5 = createLinkedList(values[`b5-s1`].split(" "));
          //
          linkedListBai5.swapTwoNodes();
          setResult(linkedListBai5.getList());

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

export default Day12;
