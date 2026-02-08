"use client";

import { useEffect } from "react";
import { Form, Input, Button, Select, DatePicker, Card } from "antd";
import moment from "moment";

const { Option } = Select;

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function TeacherBasicInfoPage({ setStep }: Props) {
  const [form] = Form.useForm();


  useEffect(() => {
    if (typeof window === "undefined") return;

    const draft = localStorage.getItem("teacherBasicInfoDraft");
    if (!draft) return;

    const parsed = JSON.parse(draft);

    form.setFieldsValue({
      gender: parsed.gender,
      dob: parsed.dob ? moment(parsed.dob) : null, 
      primaryContact: parsed.primaryContact,
      emergencyContact: parsed.emergencyContact,
    });
  }, [form]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    const payload = {
      gender: values.gender,
      dob: values.dob.format("YYYY-MM-DD"),
      primaryContact: values.primaryContact,
      emergencyContact: values.emergencyContact,
    };

    localStorage.setItem(
      "teacherBasicInfoDraft",
      JSON.stringify(payload)
    );

    console.log("Teacher Basic Info Saved:", payload);
    setStep(3);
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
      <Card title="Teacher – Basic Information" style={{ width: 420 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          {/* Gender */}
          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              { required: true, message: "Please select gender" },
            ]}
          >
            <Select placeholder="Select gender">
              <Option value="MALE">Male</Option>
              <Option value="FEMALE">Female</Option>
              <Option value="OTHER">Other</Option>
            </Select>
          </Form.Item>

          {/* Date of Birth */}
          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[
              { required: true, message: "Please select date of birth" },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              disabledDate={(current) =>
                current && current > moment().endOf("day")
              }
            />
          </Form.Item>

          {/* Primary Contact */}
          <Form.Item
            label="Primary Contact"
            name="primaryContact"
            rules={[
              { required: true, message: "Primary contact is required" },
              {
                pattern: /^[0-9]{10}$/,
                message: "Mobile number must be 10 digits",
              },
            ]}
          >
            <Input placeholder="10 digit mobile number" />
          </Form.Item>

          {/* Emergency Contact */}
          <Form.Item
            label="Emergency Contact"
            name="emergencyContact"
            rules={[
              { required: true, message: "Emergency contact is required" },
              {
                pattern: /^[0-9]{10}$/,
                message: "Mobile number must be 10 digits",
              },
            ]}
          >
            <Input placeholder="10 digit mobile number" />
          </Form.Item>

          {/* Buttons */}
          <Form.Item>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 8,
              }}
            >
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
