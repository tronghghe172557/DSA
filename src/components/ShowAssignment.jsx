import { Form, Button } from "antd";
import React from "react";

function ShowAssignment(props) {
  const { result, getTopic, bai, getFormFields, iterateTree, onFinish } = props;
  const [form] = Form.useForm();

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
            style={{ width: "100%", height: "80%", marginBottom: "30px" }}
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

      {iterateTree && <h4>Duyệt Tree bằng {iterateTree}</h4>}
      <h4>Đáp án</h4>
      {/* <h3 id="result">{result}</h3> */}
      <h2 dangerouslySetInnerHTML={{ __html: result }} />
    </>
  );
}

export default ShowAssignment;
