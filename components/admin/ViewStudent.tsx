"use client";

import {
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Divider,
} from "antd";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import clientErrorHandler from "@/lib/clientErrorHandler";
import api from "@/lib/axios";
import DocumentPreview from "../DocumentPreview";
import Image from "next/image";

const ViewStudent = ({id}: {id:string}) => {
  const [photo, setPhoto] = useState("")
  const [form] = Form.useForm();

  const handleFinish = (value)=>{
    console.log(value);
  }

const handleFetchData = async () => {
  try {
    const res = await api.post(`/student/fetch-all-data-student/${id}`);

    const student = res.data.data;
    setPhoto(student.documents.photo)
    console.log(student);

    form.setFieldsValue({
      ...student,

      // contactInfo ke andar address & guardian hain
      address: student.contactInfo?.address,
      guardian: student.contactInfo?.guardian,

      // dob & admissionDate ko as-it-is rehne do
      basicInfo: {
        ...student.basicInfo,
        dob: student.basicInfo?.dob,
      },

      academicInfo: {
        ...student.academicInfo,
        admissionDate: student.academicInfo?.admissionDate,
      },

      documents: {
        ...student.documents
      }
    });
  } catch (error) {
    return clientErrorHandler(error);
  }
};


  useEffect(()=>{
    handleFetchData()
  },[])

  return (
    <Form form={form} onFinish={handleFinish} layout="vertical" className="">
      <Card className="w-225 shadow-xl mx-auto">
        <CardHeader className="text-center relative">
          <CardTitle className="text-2xl font-bold">STUDENT DATA</CardTitle>
          <p className="text-sm text-muted-foreground">
            Academic Year 2026 – 2027
          </p>

          <div className="absolute right-6 top-6 text-left">
            <div className="h-30 w-30 mb-1 bg-gray-200 p-1" >
              {
                photo &&
                <Image
                src={photo }
                alt="profile-photo"
                width={0}
                height={0}
                unoptimized
                className="h-28 w-28 object-contain rounded cursor-pointer"
              />
              }
            </div>
            <p className="font-medium">
              Student ID: <span className="text-gray-600">STD-01</span>
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* BASIC INFO */}
          <Divider titlePlacement="left">Basic Information</Divider>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              label="First Name"
              name={["basicInfo", "firstName"]}
              rules={[{ required: true, message: "First name is required" }]}
            >
              <Input disabled/>
            </Form.Item>

            <Form.Item
              label="Last Name"
              name={["basicInfo", "lastName"]}
              rules={[{ required: true }]}
            >
              <Input disabled/>
            </Form.Item>

            <Form.Item
              label="Gender"
              name={["basicInfo", "gender"]}
              rules={[{ required: true }]}
            >
              <Select
                options={[
                  { value: "MALE", label: "Male" },
                  { value: "FEMALE", label: "Female" },
                ]}
                disabled
              />
            </Form.Item>

            <Form.Item
              label="Date of Birth"
              name={["basicInfo", "dob"]}
            >
              <Input disabled placeholder="YYYY-MM-DD" />
            </Form.Item>


            <Form.Item
              label="Blood Group"
              name={["basicInfo", "bloodGroup"]}
              rules={[{ required: true }]}
            >
              <Select
                options={[
                  { value: "O+", label: "O+" },
                  { value: "A+", label: "A+" },
                  { value: "B+", label: "B+" },
                  { value: "AB+", label: "AB+" },
                ]}
                disabled
              />
            </Form.Item>

            <Form.Item
              label="Aadhaar Number"
              name={["basicInfo", "aadhaarNumber"]}
              rules={[
                { required: true },
                { len: 12, message: "Aadhaar must be 12 digits" },
              ]}
            >
              <Input disabled/>
            </Form.Item>

            <Form.Item label="Religion" name={["basicInfo", "religion"]}>
              <Input disabled/>
            </Form.Item>

            <Form.Item label="Nationality" name={["basicInfo", "nationality"]}>
              <Input disabled/>
            </Form.Item>

            <Form.Item
              label="Mobile"
              name={["basicInfo", "mobile"]}
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

          </div>

          {/* ADDRESS */}
          <Divider titlePlacement="left">Address Information</Divider>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Current Address" name={["address", "current"]}>
              <Input />
            </Form.Item>
            <Form.Item label="Permanent Address" name={["address", "permanent"]}>
              <Input />
            </Form.Item>
            <Form.Item label="City" name={["address", "city"]}>
              <Input />
            </Form.Item>
            <Form.Item label="State" name={["address", "state"]}>
              <Input />
            </Form.Item>
            <Form.Item label="Pincode" name={["address", "pincode"]}>
              <Input />
            </Form.Item>
          </div>

          {/* GUARDIAN */}
          <Divider titlePlacement="left">Guardian Information</Divider>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Father Name" name={["guardian", "fatherName"]}>
              <Input disabled/>
            </Form.Item>
            <Form.Item label="Mother Name" name={["guardian", "motherName"]}>
              <Input disabled/>
            </Form.Item>
            <Form.Item label="Guardian Mobile" name={["guardian", "guardianMobile"]}>
              <Input />
            </Form.Item>
            <Form.Item label="Guardian Email" name={["guardian", "guardianEmail"]}>
              <Input />
            </Form.Item>
          </div>

          {/* ACADEMIC */}
          <Divider titlePlacement="left">Academic Information</Divider>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              label="Admission Date"
              name={["academicInfo", "admissionDate"]}
            >
              <Input disabled placeholder="YYYY-MM-DD" />
            </Form.Item>


            <Form.Item
              label="Academic Year"
              name={["academicInfo", "academicYear"]}
            >
              <Input disabled/>
            </Form.Item>

            <Form.Item label="Class" name={["academicInfo", "className"]}>
              <Input disabled/>
            </Form.Item>

            <Form.Item label="Roll Number" name={["academicInfo", "rollNumber"]}>
              <Input />
            </Form.Item>

            <Form.Item label="Medium" name={["academicInfo", "medium"]}>
              <Input />
            </Form.Item>

            <Form.Item label="Stream" name={["academicInfo", "stream"]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Previous School"
              name={["academicInfo", "previousSchool"]}
            >
              <Input disabled/>
            </Form.Item>

            <Form.Item
              label="Previous Percentage"
              name={["academicInfo", "previousPercentage"]}
            >
              <InputNumber min={0} max={100} className="w-full" disabled/>
            </Form.Item>
          </div>

          {/* DOCUMENTS */}
          <Divider titlePlacement="left">Documents</Divider>

          <Form.Item shouldUpdate>
            {() => {
              const documents = form.getFieldValue("documents") || {};

              return (
                <div className="grid grid-cols-2 gap-6">
                  <DocumentPreview title="Student Photo" url={documents.photo} />
                  <DocumentPreview title="Aadhaar Card" url={documents.aadhaarCard} />
                  <DocumentPreview title="Birth Certificate" url={documents.birthCertificate} />
                  <DocumentPreview title="Marksheet" url={documents.marksheet} />
                </div>
              );
            }}
          </Form.Item>

          <Divider />
          <Button type="primary" className="w-full h-11 text-lg">
            Upadte Student Data
          </Button>
        </CardContent>
      </Card>
    </Form>
  );
};

export default ViewStudent;
