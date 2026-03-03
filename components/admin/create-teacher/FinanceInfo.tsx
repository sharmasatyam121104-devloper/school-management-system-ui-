"use client";

import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Upload,
  Modal,
  message,
} from "antd";
import type { UploadFile } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import api from "@/lib/axios";
import clientErrorHandler from "@/lib/clientErrorHandler";
import Image from "next/image";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  email: string;
};

type FinanceFormValues = {
  salary: number;
  accountNumber: string;
  ifscCode: string;
  bankName: string;
  aadhaarCard: UploadFile[];
  panCard: UploadFile[];
  certificates: UploadFile[];
  photo: UploadFile[];
};

export default function TeacherFinanceInfoPage({
  setStep,
  email,
}: Props) {
  const [form] = Form.useForm<FinanceFormValues>();
  const [loading, setLoading] = useState(false);

  // Preview states
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as File);
        reader.onload = () => resolve(reader.result as string);
      });
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const onFinish = async (values: FinanceFormValues) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("email", email);
      formData.append("salary", String(values.salary));
      formData.append("accountNumber", values.accountNumber);
      formData.append("ifscCode", values.ifscCode);
      formData.append("bankName", values.bankName);

      // Files
      formData.append(
        "aadhaarCard",
        values.aadhaarCard[0].originFileObj as File
      );

      formData.append(
        "panCard",
        values.panCard[0].originFileObj as File
      );

      formData.append(
        "photo",
        values.photo[0].originFileObj as File
      );

      values.certificates?.forEach((file) => {
        formData.append(
          "certificates",
          file.originFileObj as File
        );
      });

      console.log("FINANCE DATA READY", formData);

      // Example API
      const {data} = await api.post("/teacher/create-teacher/save-finance", formData);

      message.success(data.message);
      setStep(6);

    } catch (error) {
      clientErrorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 w-full">
      <Card title="Finance Information" className="w-full max-w-2xl">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          {/* Salary */}
          <Form.Item
            label="Salary"
            name="salary"
            rules={[{ required: true, message: "Salary required" }]}
          >
            <Input type="number" />
          </Form.Item>

          {/* Bank Details */}
          <Form.Item
            label="Account Number"
            name="accountNumber"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="IFSC Code"
            name="ifscCode"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Bank Name"
            name="bankName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          {/* Aadhaar */}
          <Form.Item
            label="Aadhaar Card"
            name="aadhaarCard"
            valuePropName="fileList"
            getValueFromEvent={(e) => e?.fileList}
            rules={[{ required: true }]}
          >
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              maxCount={1}
              onPreview={handlePreview}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

          {/* PAN */}
          <Form.Item
            label="PAN Card"
            name="panCard"
            valuePropName="fileList"
            getValueFromEvent={(e) => e?.fileList}
            rules={[{ required: true }]}
          >
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              maxCount={1}
              onPreview={handlePreview}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

          {/* Certificates */}
          <Form.Item
            label="Certificates"
            name="certificates"
            valuePropName="fileList"
            getValueFromEvent={(e) => e?.fileList}
          >
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              multiple
              onPreview={handlePreview}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

          {/* Photo */}
          <Form.Item
            label="Photo"
            name="photo"
            valuePropName="fileList"
            getValueFromEvent={(e) => e?.fileList}
            rules={[{ required: true }]}
          >
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              maxCount={1}
              onPreview={handlePreview}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
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

        {/* Preview Modal */}
        <Modal
          open={previewOpen}
          footer={null}
          onCancel={() => setPreviewOpen(false)}
        >
          <Image
            src={previewImage}
            alt="preview"
            width={600}
            height={600}
            style={{ width: "100%", height: "auto" }}
         />
        </Modal>
      </Card>
    </div>
  );
}