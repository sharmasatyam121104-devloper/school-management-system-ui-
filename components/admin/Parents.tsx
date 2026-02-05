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

const parents = [
  {
    id: "P-01",
    parentName: "Anil Sharma",
    studentName: "Rahul Sharma",
    relation: "Father",
    phone: "9876543210",
    altPhone: "9123456789",
    email: "anil@gmail.com",
    address: "Mumbai",
    occupation: "Business",
    feesStatus: "Paid",
    status: "Active",
  },
  {
    id: "P-02",
    parentName: "Sunita Verma",
    studentName: "Priya Verma",
    relation: "Mother",
    phone: "9988776655",
    altPhone: "-",
    email: "sunita@gmail.com",
    address: "Thane",
    occupation: "Teacher",
    feesStatus: "Pending",
    status: "Inactive",
  },
];

const Parents = ()=> {
  return (
    <div className="rounded-xl border bg-background p-4">
      <h2 className="mb-4 text-lg font-semibold">Parent List</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Parent ID</TableHead>
            <TableHead>Parent Name</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Relation</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Alt Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Occupation</TableHead>
            <TableHead>Fees</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {parents.map((parent) => (
            <TableRow key={parent.id}>
              <TableCell>{parent.id}</TableCell>
              <TableCell className="font-medium">
                {parent.parentName}
              </TableCell>
              <TableCell>{parent.studentName}</TableCell>
              <TableCell>{parent.relation}</TableCell>
              <TableCell>{parent.phone}</TableCell>
              <TableCell>{parent.altPhone}</TableCell>
              <TableCell>{parent.email}</TableCell>
              <TableCell>{parent.address}</TableCell>
              <TableCell>{parent.occupation}</TableCell>

              {/* Fees Status */}
              <TableCell>
                <Badge
                  variant={
                    parent.feesStatus === "Paid"
                      ? "default"
                      : "destructive"
                  }
                >
                  {parent.feesStatus}
                </Badge>
              </TableCell>

              {/* Account Status */}
              <TableCell>
                <Badge
                  variant={
                    parent.status === "Active"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {parent.status}
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

export default Parents
