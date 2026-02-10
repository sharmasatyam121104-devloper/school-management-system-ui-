"use client";

import { useState, useEffect } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Checkbox,
  Upload,
  message,
  Card,
  Divider,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Image from "next/image";
import clientErrorHandler from "@/lib/clientErrorHandler";
import api from "@/lib/axios";

/* ===============================
   INTERFACES
================================ */
interface User {
  name: string;
  email: string;
  mobile: string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
}

interface BankDetails {
  accountNumber: string;
  ifscCode: string;
  bankName: string;
}

interface Documents {
  photo?: string;
  aadhaarCard?: string;
  panCard?: string;
  certificates?: string[];
}

interface Teacher {
  teacherId: string;
  user: User;
  designation: string;
  department: string;
  employmentType: string;
  highestQualification: string;
  specialization: string;
  experienceYears: number;
  subjectsCanTeach: string[];
  isClassTeacher: boolean;
  salary: number;
  address: Address;
  bankDetails: BankDetails;
  documents: Documents;
}

/* ===============================
   DUMMY DATA
================================ */
// const teacher?: Teacher = {
//   teacherId: "T-5",
//   user: { name: "User Eight", email: "username8@gmail.com", mobile: "8383838222" },
//   designation: "HOD",
//   department: "Science",
//   employmentType: "PERMANENT",
//   highestQualification: "B.Ed",
//   specialization: "Hindi",
//   experienceYears: 5,
//   subjectsCanTeach: ["Hindi"],
//   isClassTeacher: false,
//   salary: 100000,
//   address: { street: "House no2", city: "NSP", state: "Maharashtra", pincode: "401208" },
//   bankDetails: { accountNumber: "3738383", ifscCode: "KKKE", bankName: "NNN" },
//   documents: {
//     photo: 
//       "https://res.cloudinary.com/dhbjsge9k/image/upload/v1770592155/teacher_documents/i9twecwdtm1mnrq8sxm1.png",
//     aadhaarCard:
//       "https://res.cloudinary.com/dhbjsge9k/image/upload/v1770592157/teacher_documents/ipjg4o4bez4rg3cl5lv6.png",
//     panCard:
//       "https://res.cloudinary.com/dhbjsge9k/image/upload/v1770592159/teacher_documents/fmwo2nunz7fyyqqxncx2.png",
//     certificates: [
//       "https://res.cloudinary.com/dhbjsge9k/image/upload/v1770592155/teacher_documents/i9twecwdtm1mnrq8sxm1.png",
//     ],
//   },
// };

/* ===============================
   STYLES
================================ */
const sectionStyle = {
  background: "#fafafa",
  padding: 20,
  borderRadius: 8,
  border: "1px solid #e5e5e5",
  marginBottom: 24,
};

const labelStyle = {
  fontWeight: 500,
  color: "#555",
};

/* ===============================
   COMPONENT
================================ */
const ViewEditTeacher = ({ id }: { id: string }) => {
  const [teacher, setTeacher] = useState<Teacher | null>(null);

  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false)

  const [aadhaarList, setAadhaarList] = useState<any[]>(
    teacher?.documents.aadhaarCard
      ? [{ uid: "1", name: "Aadhaar", url: teacher?.documents.aadhaarCard }]
      : []
  );

  const [panList, setPanList] = useState<any[]>(
    teacher?.documents.panCard
      ? [{ uid: "2", name: "PAN", url: teacher?.documents.panCard }]
      : []
  );

  const [certList, setCertList] = useState<any[]>(
    teacher?.documents.certificates?.map((url, idx) => ({
      uid: `cert-${idx}`,
      name: `Certificate-${idx + 1}`,
      url,
    })) || []
  );

    const [phototList, setPhotoList] = useState<any[]>(
      teacher?.documents.photo
      ? [{ uid: "3", name: "phot", url: teacher?.documents.photo }]
      : []
      );

  useEffect(() => {
  if (!id) return;

  const fetchTeacher = async () => {
    try {
      setLoading(true);

      const res = await api.post(`teacher/fetch-all-data-teacher/${id}`)

      const data = res.data.data
      setTeacher(data)

      // Set form values
      form.setFieldsValue({
        name: data.user.name,
        email: data.user.email,
        mobile: data.user.mobile,
        designation: data.designation,
        department: data.department,
        employmentType: data.employmentType,
        highestQualification: data.highestQualification,
        specialization: data.specialization,
        experienceYears: data.experienceYears,
        subjectsCanTeach: data.subjectsCanTeach.join(", "),
        isClassTeacher: data.isClassTeacher,
        salary: data.salary,
        street: data.address.street,
        city: data.address.city,
        state: data.address.state,
        pincode: data.address.pincode,
        accountNumber: data.bankDetails.accountNumber,
        ifscCode: data.bankDetails.ifscCode,
        bankName: data.bankDetails.bankName,
      });

      // 📎 Documents
      setAadhaarList(
        data.documents.aadhaarCard
          ? [{ uid: "aadhaar", name: "Aadhaar", url: data.documents.aadhaarCard }]
          : []
      );
      
      setPhotoList(
        data.documents.aadhaarCard
          ? [{ uid: "photo", name: "photo", url: data.documents.photo }]
          : []
      );

      setPanList(
        data.documents.panCard
          ? [{ uid: "pan", name: "PAN", url: data.documents.panCard }]
          : []
      );

      setCertList(
        data.documents.certificates?.map((url, i) => ({
          uid: `cert-${i}`,
          name: `Certificate-${i + 1}`,
          url,
        })) || []
      );
    } catch (error) {
      clientErrorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  fetchTeacher();
}, [id, form]);


  useEffect(() => {
    form.setFieldsValue({
      name: teacher?.user.name,
      email: teacher?.user.email,
      mobile: teacher?.user.mobile,
      designation: teacher?.designation,
      department: teacher?.department,
      employmentType: teacher?.employmentType,
      highestQualification: teacher?.highestQualification,
      specialization: teacher?.specialization,
      experienceYears: teacher?.experienceYears,
      subjectsCanTeach: teacher?.subjectsCanTeach.join(", "),
      isClassTeacher: teacher?.isClassTeacher,
      salary: teacher?.salary,
      street: teacher?.address.street,
      city: teacher?.address.city,
      state: teacher?.address.state,
      pincode: teacher?.address.pincode,
      accountNumber: teacher?.bankDetails.accountNumber,
      ifscCode: teacher?.bankDetails.ifscCode,
      bankName: teacher?.bankDetails.bankName,
    });
  }, [form]);

  const onFinish = (values: any) => {
    try {
      setLoading(true)
      message.success("Teacher data updated !");
      setIsEditing(false);
    } 
    catch (error) {
      return clientErrorHandler(error)
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <Card
      title={
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>Teacher Information</div>
            <div style={{ color: "#666" }}>Teacher ID: {teacher?.teacherId}</div>
          </div>

          {/* Teacher Photo */}
          {phototList?.[0]?.url ? (
            <Image
              src={phototList?.[0]?.url}
              alt="Teacher"
              width={90}
              height={0}
              style={{ objectFit: "cover"  }}
              className="w-40 h-40 p-4 rounded-xl"
              loading="eager"
            />
          ) : (
            <Image
              src="/profile.jpg"
              alt="Teacher"
              width={90}
              height={0}
              style={{ borderRadius: "50%", objectFit: "cover" }}
              className="w-40 h-40 p-2"
              loading="eager"
            />
          )}

        </div>
      }
      variant={isEditing ? "outlined" : "borderless"}
      style={{ maxWidth: 900, margin: "auto" }}
    >
      <Button
        type={isEditing ? "default" : "primary"}
        onClick={() => setIsEditing(!isEditing)}
        style={{ marginBottom: 20 }}
      >
        {isEditing ? "Cancel Edit" : "Edit Teacher"}
      </Button>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        {/* USER INFO */}
        <div style={sectionStyle}>
          <Divider titlePlacement="left">User Info</Divider>

          <Form.Item label={<span style={labelStyle}>Name</span>} name="name">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"}/>
          </Form.Item>

          <Form.Item label={<span style={labelStyle}>Email</span>} name="email">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"} />
          </Form.Item>

          <Form.Item label={<span style={labelStyle}>Mobile</span>} name="mobile">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"}/>
          </Form.Item>
        </div>

        {/* TEACHER INFO */}
        <div style={sectionStyle}>
          <Divider titlePlacement="left">Teacher Info</Divider>

          <Form.Item label={<span style={labelStyle}>Designation</span>} name="designation">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"} />
          </Form.Item>

          <Form.Item label={<span style={labelStyle}>Department</span>} name="department">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"} />
          </Form.Item>

          <Form.Item label={<span style={labelStyle}>Employment Type</span>} name="employmentType">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"} />
          </Form.Item>

          <Form.Item label={<span style={labelStyle}>Highest Qualification</span>} name="highestQualification">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"}/>
          </Form.Item>

          <Form.Item label={<span style={labelStyle}>Specialization</span>} name="specialization">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"} />
          </Form.Item>

          <Form.Item label={<span style={labelStyle}>Experience Years</span>} name="experienceYears">
            <InputNumber disabled={!isEditing} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="isClassTeacher" valuePropName="checked">
            <Checkbox disabled={!isEditing}>Is Class Teacher</Checkbox>
          </Form.Item>

          <Form.Item label={<span style={labelStyle}>Salary</span>} name="salary">
            <InputNumber disabled={!isEditing} style={{ width: "100%" }} />
          </Form.Item>
        </div>

        {/* ADDRESS */}
        <div style={sectionStyle}>
          <Divider titlePlacement="left">Address</Divider>

          <Form.Item label="Street" name="street">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"} />
          </Form.Item>

          <Form.Item label="City" name="city">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"}/>
          </Form.Item>

          <Form.Item label="State" name="state">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"} />
          </Form.Item>

          <Form.Item label="Pincode" name="pincode">
            <Input disabled={!isEditing} variant={isEditing ? "outlined" : "borderless"}/>
          </Form.Item>
        </div>

        {/* DOCUMENTS */}
        <div style={sectionStyle}>
          <Divider titlePlacement="left">Documents</Divider>

          <Upload listType="picture" fileList={aadhaarList} disabled={!isEditing}>
            {isEditing && <Button icon={<UploadOutlined />}>Upload Aadhaar</Button>}
          </Upload>

          <Upload listType="picture" fileList={panList} disabled={!isEditing}>
            {isEditing && <Button icon={<UploadOutlined />}>Upload PAN</Button>}
          </Upload>

          <Upload listType="picture" fileList={certList} multiple disabled={!isEditing}>
            {isEditing && <Button icon={<UploadOutlined />}>Upload Certificates</Button>}
          </Upload>

          <Upload listType="picture" fileList={phototList} multiple disabled={!isEditing}>
            {isEditing && <Button icon={<UploadOutlined />}>Upload Certificates</Button>}
          </Upload>
        </div>

        {isEditing && (
          <Button type="primary" htmlType="submit" block>
            Save Changes
          </Button>
        )}
      </Form>
    </Card>
  );
};

export default ViewEditTeacher;
