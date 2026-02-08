import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "antd"
import Link from "next/link"

const teachers = [
  {
    id: "T001",
    name: "Rahul Verma",
    email: "rahul@college.edu",
    phone: "9876543210",
    subject: "Data Structures",
    department: "Computer Engineering",
    experience: "6 Years",
    qualification: "M.Tech",
    status: "Active",
  },
  {
    id: "T002",
    name: "Anita Sharma",
    email: "anita@college.edu",
    phone: "9123456780",
    subject: "DBMS",
    department: "IT",
    experience: "4 Years",
    qualification: "M.E",
    status: "Inactive",
  },
]

 const Teacher = ()=> {
  return (
    <>
      <Link href={"/admin/teacher/create-techer"} className="my-2 p-1" ><Button type="primary" className="bg-black! p-4!">Add New Teacher</Button></Link>
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
        </TableRow>
      </TableHeader>

      <TableBody>
        {teachers.map((teacher) => (
          <TableRow key={teacher.id}>
            <TableCell>{teacher.id}</TableCell>
            <TableCell>{teacher.name}</TableCell>
            <TableCell>{teacher.email}</TableCell>
            <TableCell>{teacher.phone}</TableCell>
            <TableCell>{teacher.subject}</TableCell>
            <TableCell>{teacher.department}</TableCell>
            <TableCell>{teacher.experience}</TableCell>
            <TableCell>{teacher.qualification}</TableCell>
            <TableCell>
              <Badge variant={teacher.status === "Active" ? "default" : "destructive"}>
                {teacher.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

export default Teacher
