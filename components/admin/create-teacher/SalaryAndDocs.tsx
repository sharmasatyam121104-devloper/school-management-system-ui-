"use client";

import { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  InputNumber,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const readDraft = (key: string) => {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export default function TeacherSalaryDocsPage({ setStep }: Props) {
  const [form] = Form.useForm();

  const salaryDraft = readDraft("teacherSalaryDocsDraft");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [aadhaarList, setAadhaarList] = useState<any[]>(
    salaryDraft?.documents?.aadhaarCard
      ? [
          {
            uid: "aadhaar-1",
            name: salaryDraft.documents.aadhaarCard,
            status: "done",
          },
        ]
      : []
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [panList, setPanList] = useState<any[]>(
    salaryDraft?.documents?.panCard
      ? [
          {
            uid: "pan-1",
            name: salaryDraft.documents.panCard,
            status: "done",
          },
        ]
      : []
  );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [certList, setCertList] = useState<any[]>(
    salaryDraft?.documents?.certificates
      ? salaryDraft.documents.certificates.map(
          (name: string, index: number) => ({
            uid: `cert-${index}`,
            name,
            status: "done",
          })
        )
      : []
  );

  useEffect(() => {
    if (!salaryDraft) return;

    form.setFieldsValue({
      salary: salaryDraft.salary,
      accountNumber: salaryDraft.bankDetails?.accountNumber,
      ifscCode: salaryDraft.bankDetails?.ifscCode,
      bankName: salaryDraft.bankDetails?.bankName,
    });
  }, [form, salaryDraft]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    const payload = {
      salary: values.salary,
      bankDetails: {
        accountNumber: values.accountNumber,
        ifscCode: values.ifscCode,
        bankName: values.bankName,
      },
      documents: {
        aadhaarCard: aadhaarList[0]?.name || null,
        panCard: panList[0]?.name || null,
        certificates: certList.map((f) => f.name),
      },
    };

    localStorage.setItem(
      "teacherSalaryDocsDraft",
      JSON.stringify(payload)
    );

    const finalTeacherPayload = {
      user: readDraft("teacherUserDraft"),
      basicInfo: readDraft("teacherBasicInfoDraft"),
      academicInfo: readDraft("teacherAcademicInfoDraft"),
      personalInfo: readDraft("teacherPersonalInfoDraft"),
      salaryAndDocs: payload,
    };

    console.log("FINAL TEACHER PAYLOAD:", finalTeacherPayload);

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
      <Card title="Teacher – Salary & Documents" style={{ width: 520 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Monthly Salary"
            name="salary"
            rules={[{ required: true, message: "Salary is required" }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              min={0}
              placeholder="Enter salary amount"
            />
          </Form.Item>

          <Form.Item label="Bank Account Number" name="accountNumber">
            <Input placeholder="Account number" />
          </Form.Item>

          <Form.Item label="IFSC Code" name="ifscCode">
            <Input placeholder="IFSC code" />
          </Form.Item>

          <Form.Item label="Bank Name" name="bankName">
            <Input placeholder="Bank name" />
          </Form.Item>

          <Form.Item label="Aadhaar Card">
            <Upload
              listType="picture"
              fileList={aadhaarList}
              onChange={({ fileList }) => setAadhaarList(fileList)}
              beforeUpload={() => false}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload Aadhaar</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="PAN Card">
            <Upload
              listType="picture"
              fileList={panList}
              onChange={({ fileList }) => setPanList(fileList)}
              beforeUpload={() => false}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload PAN</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Certificates">
            <Upload
              listType="picture"
              fileList={certList}
              onChange={({ fileList }) => setCertList(fileList)}
              beforeUpload={() => false}
              multiple
            >
              <Button icon={<UploadOutlined />}>
                Upload Certificates
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <div style={{ display: "flex", gap: 12 }}>
              <Button
                style={{ width: "100%" }}
                onClick={() => setStep(4)}
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
