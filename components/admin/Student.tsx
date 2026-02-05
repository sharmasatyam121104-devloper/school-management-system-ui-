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

const students = [
  {
    rollNo: "101",
    name: "Rahul Sharma",
    class: "10",
    section: "A",
    gender: "Male",
    dob: "2009-05-12",
    phone: "9876543210",
    parentName: "Anil Sharma",
    parentPhone: "9123456789",
    address: "Mumbai",
    admissionDate: "2023-06-10",
    feesStatus: "Paid",
    status: "Active",
  },
  {
    rollNo: "102",
    name: "Priya Verma",
    class: "9",
    section: "B",
    gender: "Female",
    dob: "2010-02-20",
    phone: "9988776655",
    parentName: "Raj Verma",
    parentPhone: "9001122334",
    address: "Thane",
    admissionDate: "2023-06-12",
    feesStatus: "Pending",
    status: "Inactive",
  },
];

const Student = ()=> {
  return (
    <div className="rounded-xl border bg-background p-4">
      <h2 className="mb-4 text-lg font-semibold">Student List</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Roll No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Sec</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>DOB</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Parent</TableHead>
            <TableHead>Parent Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Admission</TableHead>
            <TableHead>Fees</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {students.map((student) => (
            <TableRow key={student.rollNo}>
              <TableCell>{student.rollNo}</TableCell>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.section}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.dob}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell>{student.parentName}</TableCell>
              <TableCell>{student.parentPhone}</TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell>{student.admissionDate}</TableCell>
              <TableCell>
                <Badge
                    variant={
                        student.feesStatus === "Paid"
                        ? "default"
                        : "destructive"
                    }
                    >
                    {student.feesStatus}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    student.status === "Active" ? "default" : "secondary"
                  }
                >
                  {student.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button size="sm" variant="outline">
                  View
                </Button>
                <Button size="sm">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Student