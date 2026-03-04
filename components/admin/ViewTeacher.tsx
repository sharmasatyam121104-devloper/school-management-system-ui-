"use client";

import { useEffect, useState,} from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
  Tooltip,
  Upload,
} from "antd";

const { Option } = Select;

import Image from "next/image";
import { BadgeCheck, Edit, Mail, Phone, UploadIcon } from "lucide-react";
import clientErrorHandler from "@/lib/clientErrorHandler";
import api from "@/lib/axios";
import { useParams } from "next/navigation";
import Link from "next/link";
import moment from "moment";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import { mutate } from "swr";

/* ===============================
   INTERFACES
================================ */
interface User {
  name: string;
  email: string;
  mobile: string;
}

export interface ITeacher {
  // --- Data Groups ---
  account: {
    user: User;
    teacherId: string;
    loginEnabled: boolean;
  };

  professional: {
    designation: string;
    department?: string;
    joiningDate: string;
    employmentType: "PERMANENT" | "CONTRACT" | "GUEST";
    highestQualification: string;
    specialization: string;
    experienceYears: number;
    subjectsCanTeach: string[];
  };

  personal: {
    gender: "MALE" | "FEMALE" | "OTHER";
    dob: string;
    primaryContact: string;
    emergencyContact: string;
    address: { street: string; city: string; state: string; pincode: string; };
  };

  finance: {
    salary: number;
    bankDetails?: { accountNumber: string; ifscCode: string; bankName: string; };
    documents: { aadhaarCard?: string; panCard?: string; certificates: string[]; photo: string[]; };
  };


  registrationProgress: {
    currentStep: "ACCOUNT" | "PROFESSIONAL" | "PERSONAL" | "FINANCE" | "COMPLETED";
  };
}


  type ProfessionalInterface = ITeacher["professional"]
  type PersonalInterface = ITeacher["personal"]
  type FinanceInterface = ITeacher["finance"]


const ViewEditTeacher = ({ id }: { id: string }) => {

  const params = useParams()

  const [teacher, setTeacher] = useState<ITeacher | null>(null);

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)
  const [mutateValue, setMutavalue] = useState(0)

  const [professionalData, setProfessionalData] = useState<ProfessionalInterface | null>(null)
  const [personalData, setPersonalData] = useState<PersonalInterface | null>(null)
  const [financeData, setFinanceData] = useState<FinanceInterface | null>(null)

  const [openPersonal, setOpenPersonal] = useState(false);
  const [openProfessional, setOpenProfessional] = useState(false);
  const [openFinance, setOpenFinance] = useState(false);

  const handleEditProfessional = async (value: ProfessionalInterface)=>{
    try {
      setLoading(true)
      const {data} = await api.post(`/teacher/edit-teacher/edit-professional/${id}`,value)
      message.success(data.message)
      setMutavalue(1)
      setOpenProfessional(false)
    } 
    catch (error) {
      return clientErrorHandler(error)
    }
    finally {
      setLoading(false)
    }
  }

  const handleEditPersonal = async (value: PersonalInterface)=>{
    try {
      setLoading(true)
      const {data} = await api.post(`/teacher/edit-teacher/edit-personal/${id}`,value)
      message.success(data.message)
      setMutavalue(2)
      setOpenPersonal(false)
    } 
    catch (error) {
      return clientErrorHandler(error)
    }
    finally {
      setLoading(false)
    }
  }

  const handleEditFinance = async (value: FinanceInterface)=>{
    try {
      setLoading(true)
      const {data} = await api.post(`/teacher/edit-teacher/edit-finance/${id}`,value)
      message.success(data.message)
      setMutavalue(3)
      setOpenFinance(false)
    } 
    catch (error) {
      return clientErrorHandler(error)
    }
    finally {
      setLoading(false)
    }
  }



  useEffect(()=>{
    const fetchTeacherData = async()=>{
      try {
        const id = params.teacherId
        const {data} = await api.post(`/teacher/fetch-all-data-teacher/${id}`)
        console.log(data.data);
        setProfessionalData(data.data.professional)
        setPersonalData(data.data.personal)
        setFinanceData(data.data.finance)
        setTeacher(data.data)
      } 
      catch (error) {
        return clientErrorHandler(error)  
      }
    }

    fetchTeacherData()

  },[params.teacherId, mutateValue])


  return (
    <div className="bg-slate-50 w-full h-full p-2 space-y-4">
        <div className="w-full flex items-center justify-center">
          <p className="text-3xl px-6 py-2 font-semibold w-fit text-[2px_2px_4px_rgba(0,0,0,0.8)]">Teacher Information Page</p>
        </div>

        <div className="bg-white border border-slate-200 
                  flex flex-col md:flex-row 
                  justify-between items-center 
                  gap-6 p-8 rounded-2xl shadow
                  transition duration-300 max-w-4xl mx-auto"
        >

        {/* Left Section */}
        <div className="space-y-3 text-center md:text-left">
          
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <BadgeCheck className="text-blue-500 w-5 h-5" />
            <p className="text-sm text-slate-500 font-medium">
              Teacher ID: {teacher?.account.teacherId}
            </p>
          </div>

          <h1 className="text-2xl font-bold text-slate-800 capitalize">
            {teacher?.account.user.name}
          </h1>

          <div className="flex items-center gap-2 justify-center md:justify-start text-slate-600">
            <Phone className="w-4 h-4 text-slate-500" />
            <span>+91
              {teacher?.personal.primaryContact}
            </span>
          </div>

          <div className="flex items-center gap-2 justify-center md:justify-start text-slate-600">
            <Mail className="w-4 h-4 text-slate-500" />
            <span>{teacher?.account.user.email}</span>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <Image
            src={teacher?.finance.documents.photo?.[0] || "/profile.jpg"} 
            alt="Teacher Profile"
            width={140}
            height={140}
            className="rounded-2xl border-4 border-slate-100 shadow-md object-cover"
          />
        </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">

          <h2 className="text-xl font-semibold text-slate-800 mb-6">
            Professional Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-slate-700">

            {/* Row 1 */}
            <div>
              <p className="text-sm text-slate-500">Designation</p>
              <p className="font-medium">{professionalData?.designation}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Department</p>
              <p className="font-medium">{professionalData?.department}</p>
            </div>

            {/* Row 2 */}
            <div>
              <p className="text-sm text-slate-500">Joining Date</p>
              <p className="font-medium">{moment(professionalData?.joiningDate).format("DD MMMM YYYY, hh:mm A")}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Employment Type</p>
              <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full font-medium">
                {professionalData?.employmentType}
              </span>
            </div>

            {/* Row 3 */}
            <div>
              <p className="text-sm text-slate-500">Highest Qualification</p>
              <p className="font-medium capitalize">{professionalData?.highestQualification}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Specialization</p>
              <p className="font-medium capitalize">{professionalData?.specialization}</p>
            </div>

            {/* Row 4 */}
            <div>
              <p className="text-sm text-slate-500">Experience</p>
              <p className="font-medium">{professionalData?.experienceYears} Years</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Subjects Can Teach</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {
                  professionalData && professionalData?.subjectsCanTeach.map((value)=>(
                  <span key={value} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {value}
                  </span>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-8">
            <Button onClick={()=>setOpenProfessional(true)}><Edit/>Edit</Button>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">

          <h2 className="text-xl font-semibold text-slate-800 mb-6">
            Personal Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-slate-700">

            {/* Gender */}
            <div>
              <p className="text-sm text-slate-500">Gender</p>
              <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full font-medium">
                {personalData?.gender}
              </span>
            </div>

            {/* DOB */}
            <div>
              <p className="text-sm text-slate-500">Date of Birth</p>
              <p className="font-medium">{moment(personalData?.dob).format("DD MMMM YYYY")}</p>
            </div>

            {/* Primary Contact */}
            <div>
              <p className="text-sm text-slate-500">Primary Contact</p>
              <p className="font-medium">{personalData?.primaryContact}</p>
            </div>

            {/* Emergency Contact */}
            <div>
              <p className="text-sm text-slate-500">Emergency Contact</p>
              <p className="font-medium">{personalData?.emergencyContact}</p>
            </div>

          </div>

          {/* Address Section */}
          <div className="mt-8">
            <p className="text-sm text-slate-500 mb-2">Address</p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-700 space-y-1 capitalize">
              <p ><strong>Street:</strong> {personalData?.address.street}</p>
              <p><strong>City:</strong>  {personalData?.address.city}</p>
              <p><strong>State:</strong> {personalData?.address.state}</p>
              <p><strong>Pincode:</strong> {personalData?.address.pincode}</p>
            </div>
          </div>
          <div className="w-full flex justify-end mt-8">
            <Button onClick={() => setOpenPersonal(true)}><Edit/>Edit</Button>
          </div>
        </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">

        <h2 className="text-xl font-semibold text-slate-800 mb-6">
        Finance Details
        </h2>

        {/* Salary */}
        <div className="mb-8">
          <p className="text-sm text-slate-500">Monthly Salary</p>
          <p className="text-2xl font-bold text-green-600">₹{financeData?.salary.toLocaleString()}</p>
        </div>

      {/* Bank Details */}
        <div className="mb-8">
          <p className="text-sm text-slate-500 mb-2">Bank Details</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-slate-700">
            <p><strong>Bank Name:</strong> {financeData?.bankDetails?.bankName}</p>
            <p><strong>Account Number:</strong> {financeData?.bankDetails?.accountNumber}</p>
            <p><strong>IFSC Code:</strong> {financeData?.bankDetails?.ifscCode}</p>
          </div>
        </div>

      {/* Documents */}
        <div>
          <p className="text-sm text-slate-500 mb-3">Documents</p>
          <div className="space-y-4">
            {/* ID Cards */}
            <div>
              <p className="font-medium mb-2">Identity Documents</p>
              <div className="flex flex-wrap gap-2">
                <Link href={financeData?.documents.aadhaarCard || "#"}>
                  <Tooltip title="To see the image, click here">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      Aadhaar Card
                    </span>
                  </Tooltip>
                </Link>
                <Link href={financeData?.documents.aadhaarCard || "#"}>
                  <Tooltip title="To see the image, click here">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      PAN Card
                    </span>
                  </Tooltip>
                </Link>
                
              </div>
            </div>

          {/* Certificates */}
            <div>
              <p className="font-medium mb-2">Certificates</p>
              <div className="flex flex-wrap gap-2">
                {
                  financeData?.documents.certificates.map((value,index)=>(
                  <Link key={index} href={value || "#"}>
                    <Tooltip title="To see the image, click here">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        Certificate {index+1}
                      </span>
                    </Tooltip>
                  </Link>
                  ))
                }
              </div>
            </div>

          {/* Photos */}
            <div>
              <p className="font-medium mb-2">Photos</p>
              <div className="flex flex-wrap gap-2">
                {
                  financeData?.documents.photo.map((value,index)=>(
                  <Link key={index} href={value || "#"}>
                    <Tooltip title="To see the image, click here">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        Photos {index+1}
                      </span>
                    </Tooltip>
                  </Link>
                  ))
                }
              </div>
            </div>
            <div className="w-full flex justify-end mt-8">
              <Button onClick={() => setOpenFinance(true)}><Edit/>Edit</Button>
            </div>
          </div>
        </div>
      </div>
      {
        openProfessional &&
        <Modal
        title="Edit Professional Details"
        open={openProfessional}
        footer={null}
        onCancel={()=>setOpenProfessional(false)}
        >
        <Form
        onFinish={handleEditProfessional}
        form={form}
        layout="vertical"
        initialValues={{
          designation: professionalData?.designation,
          department: professionalData?.department,
          employmentType: professionalData?.employmentType,
          highestQualification: professionalData?.highestQualification,
          specialization: professionalData?.specialization,
          experienceYears: professionalData?.experienceYears,
          subjectsCanTeach: professionalData?.subjectsCanTeach,
        }}
      >
        {/* Designation */}
        <Form.Item
          label="Designation"
          name="designation"
          rules={[{ required: true, message: "Please enter designation" }]}
        >
          <Input />
        </Form.Item>

        {/* Department */}
        <Form.Item
          label="Department"
          name="department"
          rules={[{ required: true, message: "Please enter department" }]}
        >
          <Input />
        </Form.Item>

        {/* Employment Type */}
        <Form.Item
          label="Employment Type"
          name="employmentType"
          rules={[{ required: true, message: "Please select employment type" }]}
        >
          <Select>
            <Option value="PERMANENT">PERMANENT</Option>
            <Option value="CONTRACT">CONTRACT</Option>
            <Option value="GUEST">GUEST</Option>
          </Select>
        </Form.Item>

        {/* Highest Qualification */}
        <Form.Item
          label="Highest Qualification"
          name="highestQualification"
          rules={[{ required: true, message: "Please enter qualification" }]}
        >
          <Input />
        </Form.Item>

        {/* Specialization */}
        <Form.Item
          label="Specialization"
          name="specialization"
          rules={[{ required: true, message: "Please enter specialization" }]}
        >
          <Input />
        </Form.Item>

        {/* Experience */}
        <Form.Item
          label="Experience (Years)"
          name="experienceYears"
          rules={[{ required: true, message: "Please enter experience" }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        {/* Subjects */}
        <Form.Item
          label="Subjects Can Teach"
          name="subjectsCanTeach"
          rules={[{ required: true, message: "Please add subjects" }]}
        >
          <Select mode="tags" placeholder="Enter subjects">
            <Option value="Mathematics (Class 6-10)">
              Mathematics (Class 6-10)
            </Option>
            <Option value="Mental Math">Mental Math</Option>
            <Option value="Algebra">Algebra</Option>
          </Select>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block onClick={()=>handleEditProfessional} loading={loading} disabled={loading}>
            Save Details
          </Button>
        </Form.Item>
      </Form>
    </Modal>
      }

      {
        openPersonal &&
        <Modal
        title="Edit Personal Details"
        open={openPersonal}
        onCancel={()=>setOpenPersonal(false)}
        footer={null}
        >
        <Form
          onFinish={handleEditPersonal}
          form={form}
          layout="vertical"
          initialValues={{
            primaryContact: personalData?.primaryContact,
            emergencyContact: personalData?.emergencyContact,
            address: {
              street: personalData?.address?.street,
              city: personalData?.address?.city,
              state: personalData?.address?.state,
              pincode: personalData?.address.pincode,
            },
          }}>
        {/* Primary Contact */}
        <Form.Item
          label="Primary Contact"
          name="primaryContact"
          rules={[
            { required: true, message: "Please enter primary contact" },
            { pattern: /^[0-9+ ]+$/, message: "Enter valid contact number" },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Emergency Contact */}
        <Form.Item
          label="Emergency Contact"
          name="emergencyContact"
          rules={[
            { required: true, message: "Please enter emergency contact" },
            { pattern: /^[0-9+ ]+$/, message: "Enter valid contact number" },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Street */}
        <Form.Item
          label="Street"
          name={["address", "street"]}
          rules={[{ required: true, message: "Please enter street" }]}
        >
          <Input />
        </Form.Item>

        {/* City */}
        <Form.Item
          label="City"
          name={["address", "city"]}
          rules={[{ required: true, message: "Please enter city" }]}
        >
          <Input />
        </Form.Item>

        {/* State */}
        <Form.Item
          label="State"
          name={["address", "state"]}
        >
          <Input />
        </Form.Item>

        {/* Pincode */}
        <Form.Item
          label="Pincode"
          name={["address", "pincode"]}
          rules={[
            { required: true, message: "Please enter pincode" },
            { pattern: /^[0-9]{6}$/, message: "Enter valid 6-digit pincode" },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block onClick={()=>handleEditPersonal} loading={loading} disabled={loading}>
            Save Details
          </Button>
        </Form.Item>
      </Form>
          
        </Modal>
      }

      {
        openFinance &&
        <Modal
        title="Edit Finance Details"
        open={openFinance}
        onCancel={()=>setOpenFinance(false)}
        footer={null}
        >
        <Form
        onFinish={handleEditFinance}
        form={form}
        layout="vertical"
        initialValues={{
          salary: financeData?.salary,
        }}
        >
        {/* Monthly Salary */}
        <Form.Item
          label="Monthly Salary (₹)"
          name="salary"
          rules={[{ required: true, message: "Please enter salary" }]}
        >
          <InputNumber
            min={0}
            style={{ width: "100%" }}
            formatter={(value) =>
              `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
          />
        </Form.Item>

        {/* Photo Upload */}
        <Form.Item
          label="Upload Photo"
          name="photo"
          valuePropName="fileList"
          getValueFromEvent={(e: UploadChangeParam<UploadFile>) => e?.fileList}
        >
          <Upload
            listType="picture"
            beforeUpload={() => false} // prevent auto upload
            maxCount={1}
          >
            <Button icon={<UploadIcon />}>
              Select Photo
            </Button>
          </Upload>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block onClick={()=>handleEditFinance} loading={loading} disabled={loading}>
            Save Finance Details
          </Button>
        </Form.Item>

      </Form> 
    </Modal>
    }

    </div>
  );
};

export default ViewEditTeacher;
