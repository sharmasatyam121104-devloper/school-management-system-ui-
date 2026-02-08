"use client";

import { useEffect } from "react";
import { Form, Input, Button, Card } from "antd";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type TeacherUserForm = {
  name: string;
  email: string;
  mobile: string;
  password: string;
};

export default function TeacherRegisterPage({ setStep }: Props) {
  const [form] = Form.useForm<TeacherUserForm>();

  // Auto-fill from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;

    const draft = localStorage.getItem("teacherUserDraft");
    if (!draft) return;

    const parsed = JSON.parse(draft);
    form.setFieldsValue(parsed);
  }, [form]);

  const onFinish = (values: TeacherUserForm) => {
    localStorage.setItem("teacherUserDraft", JSON.stringify(values));
    console.log("Saved data:", values);
    setStep(2);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted">
      <Card title="Register Teacher (User)" style={{ width: 420 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          {/* Name */}
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Name is required" },
              { min: 2, message: "Minimum 2 characters required" },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Invalid email" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          {/* Mobile */}
          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[
              { required: true, message: "Mobile is required" },
              {
                pattern: /^[0-9]{10}$/,
                message: "Mobile must be 10 digits",
              },
            ]}
          >
            <Input placeholder="10 digit mobile" />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password is required" },
              {
                min: 6,
                message: "Password must be at least 6 characters",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          {/* Buttons */}
          <Form.Item>
            <div style={{ display: "flex", gap: 12 }}>
              <Button
                style={{ width: "100%" }}
                onClick={() => setStep(1)}
              >
                Back
              </Button>

              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Save & Continue
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
