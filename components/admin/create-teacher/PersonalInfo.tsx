"use client";

import React, { useState } from "react";
import { Form, Input, Button, Card, Radio, message } from "antd";
import clientErrorHandler from "@/lib/clientErrorHandler";
import api from "@/lib/axios";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  email: string;
};

type PersonalFormValues = {
  gender: "MALE" | "FEMALE" | "OTHER";
  dob: Date;
  primaryContact: string;
  emergencyContact: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
};

export default function TeacherPersonalInfoPage({
  setStep,
  email,
}: Props) {
  const [form] = Form.useForm<PersonalFormValues>();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: PersonalFormValues) => {
    try {
      setLoading(true);

      const formattedData = {
        email,
        gender: values.gender,
        dob: values.dob,
        primaryContact: values.primaryContact,
        emergencyContact: values.emergencyContact,
        address: {
          street: values.street,
          city: values.city,
          state: values.state,
          pincode: values.pincode,
        },
      };

      console.log("PERSONAL DATA:", formattedData);

      
      const { data } = await api.post("/teacher/create-teacher/save-personal-info", formattedData);
      message.success(data.message);
      setStep(4);

    } 
    catch (error) {
      clientErrorHandler(error);
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 w-full">
      <Card title="Personal Information" className="w-full max-w-xl">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          {/* Gender */}
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select gender" }]}
          >
            <Radio.Group>
              <Radio value="MALE">Male</Radio>
              <Radio value="FEMALE">Female</Radio>
              <Radio value="OTHER">Other</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Date of Birth */}
          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[{ required: true, message: "Date of birth is required" }]}
          >
            <Input type="date" />
          </Form.Item>

          {/* Primary Contact */}
          <Form.Item
            label="Primary Contact"
            name="primaryContact"
            rules={[
              { required: true, message: "Primary contact is required" },
              {
                pattern: /^[0-9]{10}$/,
                message: "Must be 10 digits",
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
            ]}
          >
            <Input placeholder="Emergency contact number" />
          </Form.Item>

          {/* Address Fields */}
          <Form.Item
            label="Street"
            name="street"
            rules={[{ required: true, message: "Street is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "City is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="State"
            name="state"
            rules={[{ required: true, message: "State is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Pincode"
            name="pincode"
            rules={[
              { required: true, message: "Pincode is required" },
              {
                pattern: /^[0-9]{6}$/,
                message: "Must be 6 digits",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Submit */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
            >
              Save & Continue
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}