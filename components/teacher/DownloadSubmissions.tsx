'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle } from "lucide-react"

const submissions = [
  {
    id: 1,
    student: "Rahul Patil",
    roll: "23",
    assignment: "DBMS Assignment 2",
    subject: "DBMS",
    class: "TY CSE",
    date: "18 Feb 2026",
    marks: "-",
    status: "Pending"
  },
  {
    id: 2,
    student: "Sneha Sharma",
    roll: "17",
    assignment: "DBMS Assignment 2",
    subject: "DBMS",
    class: "TY CSE",
    date: "17 Feb 2026",
    marks: "18 / 20",
    status: "Checked"
  }
]

export default function DownloadSubmissions() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <h1 className="text-2xl font-bold">Assignment Submissions</h1>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input placeholder="Class (e.g. TY CSE)" />
          <Input placeholder="Subject (e.g. DBMS)" />
          <Input placeholder="Assignment Title" />
          <Button className="w-full">Apply Filters</Button>
        </CardContent>
      </Card>

      {/* Submissions Table */}
      <Card>
        <CardContent className="pt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Student</th>
                <th className="p-2">Roll</th>
                <th className="p-2 text-left">Assignment</th>
                <th className="p-2">Subject</th>
                <th className="p-2">Class</th>
                <th className="p-2">Date</th>
                <th className="p-2">File</th>
                <th className="p-2">Marks</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {submissions.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">{item.student}</td>
                  <td className="p-2 text-center">{item.roll}</td>
                  <td className="p-2">{item.assignment}</td>
                  <td className="p-2 text-center">{item.subject}</td>
                  <td className="p-2 text-center">{item.class}</td>
                  <td className="p-2 text-center">{item.date}</td>

                  <td className="p-2 text-center">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </td>

                  <td className="p-2 text-center">
                    {item.marks}
                  </td>

                  <td className="p-2 text-center">
                    <Badge
                      variant={item.status === "Checked" ? "secondary" : "outline"}
                    >
                      {item.status}
                    </Badge>
                  </td>

                  <td className="p-2 text-center">
                    <Button size="sm">
                      Evaluate
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Evaluation Section */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <h2 className="text-lg font-semibold">Evaluate Assignment</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Marks (e.g. 18 / 20)" />
            <Input placeholder="Grade (Optional)" />
          </div>

          <Textarea
            placeholder="Remarks / Feedback for Student"
            rows={3}
          />

          <Button className="flex gap-2 bg-green-600 hover:bg-green-700">
            <CheckCircle className="h-4 w-4" />
            Submit Evaluation
          </Button>

          <p className="text-sm text-muted-foreground">
            ✔ Marks & remarks will be visible to student and saved in history.
          </p>
        </CardContent>
      </Card>

    </div>
  )
}
