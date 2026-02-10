"use client";

import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  InputNumber,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import clientErrorHandler from "@/lib/clientErrorHandler";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

/* ===============================
   LOCAL STORAGE HELPERS
================================ */
const readDraft = (key: string) => {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

/* ===============================
   AXIOS INSTANCE
================================ */


export default function TeacherSalaryDocsPage({ setStep }: Props) {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm();
  const router = useRouter()

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [aadhaarList, setAadhaarList] = useState<any[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const [photoList, setPhotoList] = useState<any[]>([]);
  
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [panList, setPanList] = useState<any[]>([]);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [certList, setCertList] = useState<any[]>([]);

  // clear drafts after successful submit
  const clearTeacherDrafts = () => {
    localStorage.removeItem("teacherUserDraft");
    localStorage.removeItem("teacherBasicInfoDraft");
    localStorage.removeItem("teacherAcademicInfoDraft");
    localStorage.removeItem("teacherPersonalInfoDraft");
  };


  /* ===============================
     SUBMIT HANDLER
  ================================ */
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    try {
      /* -----------------------------
         FINAL JSON DATA
      ------------------------------ */
      const dataPayload = {
        user: readDraft("teacherUserDraft"),
        basicInfo: readDraft("teacherBasicInfoDraft"),
        academicInfo: readDraft("teacherAcademicInfoDraft"),
        personalInfo: readDraft("teacherPersonalInfoDraft"),
        salaryAndDocs: {
          salary: values.salary,
          bankDetails: {
            accountNumber: values.accountNumber,
            ifscCode: values.ifscCode,
            bankName: values.bankName,
          },
        },
      };

      /* -----------------------------
         FORMDATA (POSTMAN STYLE)
      ------------------------------ */
      const formData = new FormData();

      // JSON string
      formData.append("data", JSON.stringify(dataPayload));

      // files
      if (aadhaarList[0]?.originFileObj) {
        formData.append("aadhaarCard", aadhaarList[0].originFileObj);
      }

      if (panList[0]?.originFileObj) {
        formData.append("panCard", panList[0].originFileObj);
      }

      if (photoList[0]?.originFileObj) {
        formData.append("photo", photoList[0].originFileObj);
      }

      certList.forEach((file) => {
        if (file.originFileObj) {
          formData.append("certificates", file.originFileObj);
        }
      });

      /* -----------------------------
         API CALL
      ------------------------------ */
      setLoading(true)
      await api.post("/teacher/create-teacher", formData);
      message.success("Teacher created successfully ");
      router.replace('/admin/teacher')
      clearTeacherDrafts()
    }
    catch (error) {
      return clientErrorHandler(error)
    }
    finally{
      setLoading(false)
    }
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
            <Input />
          </Form.Item>

          <Form.Item label="IFSC Code" name="ifscCode">
            <Input />
          </Form.Item>

          <Form.Item label="Bank Name" name="bankName">
            <Input />
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

          <Form.Item label="photo">
            <Upload
              listType="picture"
              fileList={photoList}
              onChange={({ fileList }) => setPhotoList(fileList)}
              beforeUpload={() => false}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload Photo</Button>
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
                loading={loading}
                disabled={loading}
              >
                Submit Teacher
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
