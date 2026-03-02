"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import Fetcher from "@/lib/Fetcher";
import Link from "next/link";
import { Alert, Skeleton } from "antd";
import moment from "moment";

export interface IUser {
  _id: string;
  name: string,
  email: string,
  mobile: string,
  role: string,
  createdAt: string
}

export interface IStudent  {
    studentId: string;

    basicInfo: {
        firstName: string;
        lastName: string;
        gender: "MALE" | "FEMALE" | "OTHER";
        dob: string;
        bloodGroup?: string;
        aadhaarNumber?: string;
        religion?: string;
        nationality: string;
        mobile: string;
        password: string
    };

    contactInfo: {
        studentMobile: string;
        studentEmail: string;

        address: {
            current: string;
            permanent: string;
            city: string;
            state: string;
            pincode: string;
        };

        guardian: {
            fatherName?: string;
            motherName?: string;
            guardianName: string;
            guardianMobile: string;
            guardianEmail?: string;
            relation: string;
        };
    };

    academicInfo: {
        admissionDate: Date;
        academicYear: string;
        className: string;
        rollNumber: string;
        medium: "ENGLISH" | "HINDI";
        stream?: "SCIENCE" | "COMMERCE" | "ARTS";
        previousSchool?: string;
        previousPercentage?: number;
    };

    healthInfo?: {
        bloodGroup?: string;
        medicalConditions?: string;
        emergencyContact?: string;
        doctorName?: string;
    };

    documents?: {
        birthCertificate?: string;
        aadhaarCard?: string;
        transferCertificate?: string;
        marksheet?: string;
        photo?: string;
    };

    user: IUser;
    accountStatus: "ACTIVE" | "INCOMPLETE" | "INACTIVE";
    lastLogin?: Date;
}


const Student = ()=> {
  const { data, error, isLoading } = useSWR("/student/fetch-student", Fetcher);

  const students = data
  console.log(data);
    //  Error handling
  if (error) {
    return (
      <>
        <Link href={"/admin/student/create-student"} className="my-8 py-8 ml-270 h-20 w-60  ">
          <Button >Add New Student</Button>
        </Link>
        <Alert
          title="Error"
          description={error.message || "Something went wrong"}
          type="error"
          showIcon
          className="mt-10!"
        />
      </>
    );
  }

  if (isLoading || !data) {
    return <Skeleton active />;
  }

  return (
    <div className="rounded-xl border bg-background p-4">
      <div className="flex justify-between my-2">
        <h2 className="mb-4 text-lg font-semibold">Student List</h2>
        <Link href={"/admin/student/create-student"} className="   ">
          <Button >Add New Student</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Roll No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>DOB</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Parent</TableHead>
            <TableHead>Parent Phone</TableHead>
            <TableHead>Admission</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>View & Edit</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {students.data.map((student: IStudent) => (
            <TableRow key={student.studentId}>
              <TableCell>{student.studentId}</TableCell>
              <TableCell className="font-medium capitalize">{student.user.name}</TableCell>
              <TableCell>{student.academicInfo.className}</TableCell>
              <TableCell className="">{student.basicInfo.gender}</TableCell>
              <TableCell>{moment(student.basicInfo.dob).format("DD MMMM YYYY")}</TableCell>
              <TableCell>{student.user.mobile}</TableCell>
              <TableCell>{student.contactInfo.guardian.guardianName}</TableCell>
              <TableCell>{student.contactInfo.guardian.guardianMobile}</TableCell>
              <TableCell>{moment(student.user.createdAt).format("DD MMMM YYYY, hh:mm A")}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    student.accountStatus === "ACTIVE" ? "default" : "secondary"
                  }
                >
                  {student.accountStatus}
                </Badge>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Link href={`/admin/student/view-student/${student.user._id}`}>
                    <Button size="sm" variant="outline" >
                      View
                    </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Student