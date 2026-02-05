"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ClipboardList,
  Upload,
  Calendar,
  Eye,
  Download,
} from "lucide-react"

const assignmentHistory = [
  {
    title: "Algebra Worksheet",
    class: "10-A",
    subject: "Mathematics",
    givenDate: "01 Feb 2026",
    dueDate: "05 Feb 2026",
    marks: 20,
    submissions: "35 / 40",
    status: "Open",
  },
  {
    title: "Geometry Homework",
    class: "9-B",
    subject: "Mathematics",
    givenDate: "25 Jan 2026",
    dueDate: "30 Jan 2026",
    marks: 25,
    submissions: "40 / 40",
    status: "Closed",
  },
]

export default function Assignments() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Assignments</h1>

      {/* ===== CREATE ASSIGNMENT ===== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Create New Assignment
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Class (e.g. 10-A)" />
            <Input placeholder="Subject (e.g. Mathematics)" />
            <Input placeholder="Assignment Title" />
            <Input type="number" placeholder="Total Marks" />
          </div>

          <Textarea placeholder="Assignment Description / Instructions" />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <Input type="date" />
            </div>
            <Input type="file" />
          </div>

          <Button className="flex gap-2">
            <Upload className="h-4 w-4" />
            Assign to Students
          </Button>
        </CardContent>
      </Card>

      {/* ===== ASSIGNMENT HISTORY ===== */}
      <Card>
        <CardHeader>
          <CardTitle>Assignment History</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Given Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Marks</TableHead>
                <TableHead>Submissions</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {assignmentHistory.map((a, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{a.title}</TableCell>
                  <TableCell>{a.class}</TableCell>
                  <TableCell>{a.subject}</TableCell>
                  <TableCell>{a.givenDate}</TableCell>
                  <TableCell>{a.dueDate}</TableCell>
                  <TableCell>{a.marks}</TableCell>
                  <TableCell>{a.submissions}</TableCell>
                  <TableCell>
                    <Badge
                      variant={a.status === "Open" ? "secondary" : "outline"}
                    >
                      {a.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
