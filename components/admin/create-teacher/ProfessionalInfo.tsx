'use client'

import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select, InputNumber, Card, message } from "antd";
import moment from "moment";
import clientErrorHandler from "@/lib/clientErrorHandler";
import api from "@/lib/axios";

/* =========================
   TYPES
========================= */

export interface TeacherProfessionalValues {
  designation: string;
  department?: string;
  joiningDate: moment.Moment;
  employmentType?: "PERMANENT" | "CONTRACT" | "GUEST";
  highestQualification?: string;
  specialization?: string;
  experienceYears?: number;
  subjectsCanTeach?: string[];
}

interface Props {
  setStep?: (step: number) => void;
  email: string
}

/* =========================
   COMPONENT
========================= */

const TeacherProfessionalInfo: React.FC<Props> = ({ setStep, email}) => {
  const [form] = Form.useForm<TeacherProfessionalValues>();
  const [loading, setLoading] = useState(false)

    const handleFinish = async(values: TeacherProfessionalValues) => {
        try {
            setLoading(true)
            const formattedData = {
                ...values,
                email,
                joiningDate: values.joiningDate
                ? values.joiningDate.toISOString()
                : null,
            };
            const {data} = await api.post('/teacher/create-teacher/save-professional-info', formattedData)
            message.info(data.message)
            if(setStep) setStep(3)
        } 
        catch (error) {
            return clientErrorHandler(error)    
        }
        finally {
            setLoading(false)
        }

    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4 w-200">
      <Card
        title="Teacher Professional Information"
        className="w-full max-w-2xl shadow-xl rounded-2xl"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          requiredMark={false}
        >
          {/* Designation */}
          <Form.Item
            label="Designation"
            name="designation"
            rules={[{ required: true, message: "Designation is required" }]}
          >
            <Select
              placeholder="Select designation"
              size="large"
              options={[
                { value: "PGT", label: "PGT" },
                { value: "TGT", label: "TGT" },
                { value: "PRT", label: "PRT" },
                { value: "HOD", label: "HOD" },
                { value: "PRINCIPAL", label: "PRINCIPAL" },
                { value: "ADMIN_STAFF", label: "ADMIN STAFF" },
              ]}
            />
          </Form.Item>

          {/* Department */}
          <Form.Item label="Department" name="department">
            <Input placeholder="Enter department" size="large" />
          </Form.Item>

          {/* Joining Date */}
          <Form.Item
            label="Joining Date"
            name="joiningDate"
            rules={[{ required: true, message: "Joining date is required" }]}
          >
            <DatePicker className="w-full" size="large" />
          </Form.Item>

          {/* Employment Type */}
          <Form.Item label="Employment Type" name="employmentType">
            <Select
              placeholder="Select employment type"
              size="large"
              options={[
                { value: "PERMANENT", label: "PERMANENT" },
                { value: "CONTRACT", label: "CONTRACT" },
                { value: "GUEST", label: "GUEST" },
              ]}
            />
          </Form.Item>

          {/* Highest Qualification */}
          <Form.Item label="Highest Qualification" name="highestQualification">
            <Input placeholder="e.g. M.Sc, PhD" size="large" />
          </Form.Item>

          {/* Specialization */}
          <Form.Item label="Specialization" name="specialization">
            <Input placeholder="Enter specialization" size="large" />
          </Form.Item>

          {/* Experience Years */}
          <Form.Item label="Experience Years" name="experienceYears" initialValue={0}>
            <InputNumber min={0} className="w-full" size="large" />
          </Form.Item>

          {/* Subjects Can Teach */}
          <Form.Item label="Subjects Can Teach" name="subjectsCanTeach">
            <Select
              mode="tags"
              placeholder="Enter subjects"
              size="large"
            />
          </Form.Item>

          {/* Submit */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Save & Continue
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default TeacherProfessionalInfo;