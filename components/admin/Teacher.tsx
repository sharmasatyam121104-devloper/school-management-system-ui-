"use client"; // MUST for useSWR + hooks

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Alert, Button, Divider, Skeleton } from "antd";
import Link from "next/link";
import  useSWR  from "swr";
import Fetcher from "@/lib/Fetcher";
import { IUser } from "./Student";


export interface ITeacher {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  role: "TEACHER" | "STUDENT" | "ADMIN";
  createdAt: string;
  updatedAt: string;
  teacherId: string;
  user: IUser;
  subjectsCanTeach: string[];
  department: string;
  experienceYears: string;
  highestQualification: string;
  status: string;
}

export interface ITeacherResponse {
  data: ITeacher[];
  message: string;
  success: boolean;
}


const Teacher = () => {
  const { data, error, isLoading } = useSWR("/teacher/fetch-teacher", Fetcher);

  console.log(data);

  //  Error handling
  if (error) {
    return (
      <>
        <Link href={"/admin/teacher/create-teacher"} className="my-8 py-8 ml-270 h-20 w-60  ">
          <Button type="primary">Add New Teacher</Button>
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

  //  Loading state
  if (isLoading || !data) {
    return <Skeleton active />;
  }

  const teachers = data.data;

  return (
    <div className="w-full ">
      <Link href={"/admin/teacher/create-teacher"} className="my-8 py-8 ml-270  ">
        <Button type="primary">Add New Teacher</Button>
      </Link>
      <Divider/>

      <Table className="mt-2">
        <TableCaption>List of Teachers</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Qualification</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Viwe</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {teachers.map((teacher: ITeacher) => (
            <TableRow key={teacher.teacherId}>
              <TableCell>{teacher.teacherId}</TableCell>
              <TableCell className="capitalize">{teacher.user?.name}</TableCell>
              <TableCell>{teacher.user?.email}</TableCell>
              <TableCell>{teacher.user?.mobile}</TableCell>
              <TableCell className="capitalize">{teacher.subjectsCanTeach?.join(", ")}</TableCell>
              <TableCell>{teacher.department}</TableCell>
              <TableCell>{teacher.experienceYears}</TableCell>
              <TableCell>{teacher.highestQualification}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    teacher.status === "Active" ? "default" : "destructive"
                  }
                >
                  {teacher.status}
                </Badge>
              </TableCell>

              <TableCell>
                {/*  View Button */}
                <Link href={`/admin/teacher/view-teacher/${teacher.user._id}`}>
                  <Button type="default" size="small">
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
};

export default Teacher;
