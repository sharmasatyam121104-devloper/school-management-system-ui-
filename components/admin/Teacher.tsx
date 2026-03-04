"use client";

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
import useSWR from "swr";
import Fetcher from "@/lib/Fetcher";

/* =========================
   TYPE DEFINITIONS
========================= */

interface IUser {
  _id: string;
  name: string;
  email: string;
  mobile: string;
}

interface ITeacher {
  _id: string;
  status: string;
  account: {
    teacherId: string;
    user: IUser;
  };
}

interface ITeacherResponse {
  success: boolean;
  message: string;
  data: ITeacher[];
}

/* =========================
   COMPONENT
========================= */

const Teacher = () => {
  const { data, error, isLoading } = useSWR<ITeacherResponse>(
    "/teacher/fetch-teacher",
    Fetcher
  );

  console.log(data);

  /* =========================
     ERROR STATE
  ========================== */

  if (error) {
    return (
      <div className="p-6">
        <Link href="/admin/teacher/create-teacher">
          <Button type="primary">Add New Teacher</Button>
        </Link>

        <Divider />

        <Alert
          message="Error"
          description={error.message || "Something went wrong"}
          type="error"
          showIcon
        />
      </div>
    );
  }

  /* =========================
     LOADING STATE
  ========================== */

  if (isLoading || !data) {
    return <Skeleton active />;
  }

  const teachers = data.data;

  /* =========================
     MAIN UI
  ========================== */

  return (
    <div className="w-full p-4">

      <Link href="/admin/teacher/create-teacher">
        <Button type="primary">Add New Teacher</Button>
      </Link>

      <Divider />

      <Table>
        <TableCaption>List of Teachers</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Teacher ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher._id}>

              <TableCell>
                {teacher.account?.teacherId}
              </TableCell>

              <TableCell className="capitalize">
                {teacher.account?.user?.name}
              </TableCell>

              <TableCell>
                {teacher.account?.user?.email}
              </TableCell>

              <TableCell>
                {teacher.account?.user?.mobile}
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    teacher.status === "ACTIVE"
                      ? "default"
                      : "destructive"
                  }
                >
                  {teacher.status}
                </Badge>
              </TableCell>

              <TableCell>
                <Link
                  href={`/admin/teacher/view-teacher/${teacher._id}`}
                >
                  <Button size="small">
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