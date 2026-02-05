"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ClipboardCheck,
  Calendar,
  Eye,
} from "lucide-react"

const students = [
  { roll: 1, name: "Satyam Sharma" },
  { roll: 2, name: "Ashmita Upadhyay" },
  { roll: 3, name: "Suyash Tiwari" },
  { roll: 4, name: "Smruti Tukadiya" },
]

const attendanceHistory = [
  {
    date: "05 Feb 2026",
    class: "10-A",
    subject: "Mathematics",
    period: "1",
    present: 35,
    absent: 5,
  },
  {
    date: "04 Feb 2026",
    class: "9-B",
    subject: "Mathematics",
    period: "2",
    present: 38,
    absent: 2,
  },
]

export default function Attendance() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Attendance</h1>

      {/* ===== MARK ATTENDANCE ===== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5" />
            Mark Attendance
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-4 gap-4">
            <Input placeholder="Class (e.g. 10-A)" />
            <Input placeholder="Subject" />
            <Input placeholder="Period / Lecture No" />
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <Input type="date" />
            </div>
          </div>

          {/* STUDENT TABLE */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Roll No</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {students.map((s, index) => (
                <TableRow key={index}>
                  <TableCell>{s.roll}</TableCell>
                  <TableCell>{s.name}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button size="sm" variant="outline">Present</Button>
                    <Button size="sm" variant="outline">Absent</Button>
                    <Button size="sm" variant="outline">Late</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Button className="mt-2">Save Attendance</Button>
        </CardContent>
      </Card>

      {/* ===== ATTENDANCE HISTORY ===== */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance History</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Present</TableHead>
                <TableHead>Absent</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {attendanceHistory.map((a, index) => (
                <TableRow key={index}>
                  <TableCell>{a.date}</TableCell>
                  <TableCell>{a.class}</TableCell>
                  <TableCell>{a.subject}</TableCell>
                  <TableCell>{a.period}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{a.present}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive">{a.absent}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
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
