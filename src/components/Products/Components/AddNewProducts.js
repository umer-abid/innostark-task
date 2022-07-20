import React, { useEffect, useMemo } from "react";
import moment from "moment";
import { Button, Form, Input, InputNumber, DatePicker } from "antd";
const layout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 19
  }
};

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} is required!"
};

export const AddNewProducts = props => {
  const onFinish = values => {
    let data = {
      ...props.editData,
      ...values
    };
    props.addProduct(data);
  };
  let productValues = useMemo(
    () => ({
      name: props?.editData?.name || "",
      price: props?.editData?.price || "",
      description: props?.editData?.description || "",
      date: moment(props?.editData?.date).format("YYYY-MM-DD") || moment()
    }),
    [props?.editData]
  );

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(productValues);
  }, [form, productValues]);

  return (
    <>
      <Form
        {...layout}
        form={form}
        name="product-form"
        onFinish={onFinish}
        validateMessages={validateMessages}
        initialValues={productValues}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true
            }
          ]}
        >
          <InputNumber
            style={{
              width: "100%"
            }}
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              required: true
            }
          ]}
          getValueFromEvent={onChange => moment(onChange).format("YYYY-MM-DD")}
          getValueProps={e => ({ value: moment(e) })}
        >
          <DatePicker
            style={{
              width: "100%"
            }}
            // format="YYYY-MM-DD"
            // // value={productValues?.date}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
