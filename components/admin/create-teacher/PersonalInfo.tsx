"use client";

import { useEffect } from "react";
import { Form, Input, Button, Select, Card } from "antd";

const { Option } = Select;

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function TeacherPersonalInfoPage({ setStep }: Props) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedData = localStorage.getItem("teacherPersonalInfoDraft");
    if (savedData) {
      const parsed = JSON.parse(savedData);

      form.setFieldsValue({
        street: parsed.address?.street,
        city: parsed.address?.city,
        state: parsed.address?.state,
        pincode: parsed.address?.pincode,
        bloodGroup: parsed.bloodGroup,
      });
    }
  }, [form]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    const payload = {
      address: {
        street: values.street,
        city: values.city,
        state: values.state,
        pincode: values.pincode,
      },
      bloodGroup: values.bloodGroup,
    };

    localStorage.setItem(
      "teacherPersonalInfoDraft",
      JSON.stringify(payload)
    );

    console.log("Personal Info Saved:", payload);
    setStep(5);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Card title="Teacher – Personal Information" style={{ width: 520 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Street Address"
            name="street"
            rules={[{ required: true, message: "Street address is required" }]}
          >
            <Input placeholder="House no, area, landmark" />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "City is required" }]}
          >
            <Input placeholder="City name" />
          </Form.Item>

          <Form.Item
            label="State"
            name="state"
            rules={[{ required: true, message: "State is required" }]}
          >
            <Input placeholder="State name" />
          </Form.Item>

          <Form.Item
            label="Pincode"
            name="pincode"
            rules={[
              { required: true, message: "Pincode is required" },
              {
                pattern: /^[0-9]{6}$/,
                message: "Pincode must be 6 digits",
              },
            ]}
          >
            <Input placeholder="6 digit pincode" />
          </Form.Item>

          <Form.Item label="Blood Group" name="bloodGroup">
            <Select placeholder="Select blood group">
              <Option value="A+">A+</Option>
              <Option value="A-">A-</Option>
              <Option value="B+">B+</Option>
              <Option value="B-">B-</Option>
              <Option value="AB+">AB+</Option>
              <Option value="AB-">AB-</Option>
              <Option value="O+">O+</Option>
              <Option value="O-">O-</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <div style={{ display: "flex", gap: 12 }}>
              <Button style={{ width: "100%" }} onClick={() => setStep(3)}>
                Back
              </Button>

              <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                Save & Continue
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
