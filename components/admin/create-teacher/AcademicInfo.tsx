"use client";

import { useEffect } from "react";
import { Form, Input, Button, Select, InputNumber, Switch, Card } from "antd";

const { Option } = Select;

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function TeacherAcademicInfoPage({ setStep }: Props) {
  const [form] = Form.useForm();

  // AUTO FILL FROM LOCALSTORAGE
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedData = localStorage.getItem("teacherAcademicInfoDraft");
    if (savedData) {
      const parsed = JSON.parse(savedData);

      form.setFieldsValue({
        designation: parsed.designation,
        department: parsed.department,
        highestQualification: parsed.highestQualification,
        specialization: parsed.specialization,
        experienceYears: parsed.experienceYears,
        subjectsCanTeach: parsed.subjectsCanTeach,
        isClassTeacher: parsed.isClassTeacher,
        class: parsed.classTeacherOf?.class,
        section: parsed.classTeacherOf?.section,
      });
    }
  }, [form]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    const payload = {
      designation: values.designation,
      department: values.department,
      highestQualification: values.highestQualification,
      specialization: values.specialization,
      experienceYears: values.experienceYears || 0,
      subjectsCanTeach: values.subjectsCanTeach || [],
      isClassTeacher: values.isClassTeacher || false,
      classTeacherOf: values.isClassTeacher
        ? {
            class: values.class,
            section: values.section,
          }
        : null,
    };

    localStorage.setItem(
      "teacherAcademicInfoDraft",
      JSON.stringify(payload)
    );

    console.log("Academic Info Saved:", payload);
    setStep(4);
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
      <Card title="Teacher – Academic Information" style={{ width: 520 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Designation"
            name="designation"
            rules={[{ required: true, message: "Designation is required" }]}
          >
            <Select placeholder="Select designation">
              <Option value="PGT">PGT</Option>
              <Option value="TGT">TGT</Option>
              <Option value="PRT">PRT</Option>
              <Option value="HOD">HOD</Option>
              <Option value="PRINCIPAL">Principal</Option>
              <Option value="ADMIN_STAFF">Admin Staff</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Department" name="department">
            <Input placeholder="e.g. Science, Mathematics" />
          </Form.Item>

          <Form.Item
            label="Highest Qualification"
            name="highestQualification"
            rules={[{ required: true, message: "Qualification is required" }]}
          >
            <Input placeholder="B.Ed, M.Ed, M.Sc, PhD" />
          </Form.Item>

          <Form.Item
            label="Specialization"
            name="specialization"
            rules={[{ required: true, message: "Specialization is required" }]}
          >
            <Input placeholder="Mathematics, Physics, Hindi" />
          </Form.Item>

          <Form.Item label="Experience (Years)" name="experienceYears">
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Subjects Can Teach" name="subjectsCanTeach">
            <Select mode="tags" placeholder="Type & press enter" />
          </Form.Item>

          <Form.Item
            label="Is Class Teacher?"
            name="isClassTeacher"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item shouldUpdate>
            {({ getFieldValue }) =>
              getFieldValue("isClassTeacher") && (
                <>
                  <Form.Item
                    label="Class"
                    name="class"
                    rules={[{ required: true, message: "Class is required" }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Section"
                    name="section"
                    rules={[{ required: true, message: "Section is required" }]}
                  >
                    <Input />
                  </Form.Item>
                </>
              )
            }
          </Form.Item>

          <Form.Item>
            <div style={{ display: "flex", gap: 12 }}>
              <Button style={{ width: "100%" }} onClick={() => setStep(2)}>
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
