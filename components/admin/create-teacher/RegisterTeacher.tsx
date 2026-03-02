"use client";

import api from "@/lib/axios";
import clientErrorHandler from "@/lib/clientErrorHandler";
import { Form, Input, Button, Card, message } from "antd";
import { useState } from "react";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  email: string
};

type TeacherUserForm = {
  name: string;
  email: string;
  mobile: string;
  password: string;
};

export default function TeacherRegisterPage({ setStep, email }: Props) {
  console.log(email);
  const [form] = Form.useForm<TeacherUserForm>();
  const [loading, setLoading] = useState(false)

  const onFinish = async(values: TeacherUserForm) => {
    // localStorage.setItem("teacherUserDraft", JSON.stringify(values));
    // console.log("Saved data:", values);
    // setStep(2);
    try {
      setLoading(true)
      const payload = {
        name: values.name,
        email: values.email,
        mobile: values.mobile,
        password: values.password,
        role: "TEACHER",
      }
      const {data} = await api.post("/user/signup", payload)
      message.info(data.message)
      setStep(2);
      
    } catch (error) {
      return clientErrorHandler(error)
    }
    finally {
      setLoading(false)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted">
      <Card title="Register Teacher (User)" style={{ width: 420 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          initialValues={{ email }}   
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
          <p className="text-sm text-slate-800 -mt-4 mb-4 underline">
            This mobile number will be used as the primary contact number.
          </p>

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
              {/* <Button
                style={{ width: "100%" }}
                onClick={() => setStep(1)}
              >
                Back
              </Button> */}

              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                disabled={loading}
                loading={loading}
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
