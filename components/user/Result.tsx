"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const results = [
  {
    exam: "Half-Yearly Exam",
    totalMarks: 500,
    obtainedMarks: 420,
    grade: "A",
    remarks: "Excellent performance, keep it up!",
    subjects: [
      { name: "Mathematics", marks: 95 },
      { name: "Science", marks: 85 },
      { name: "English", marks: 90 },
      { name: "History", marks: 75 },
      { name: "Geography", marks: 75 },
    ],
  },
  {
    exam: "Unit Test 2",
    totalMarks: 100,
    obtainedMarks: 88,
    grade: "A",
    remarks: "Good improvement from previous test",
    subjects: [
      { name: "Mathematics", marks: 20 },
      { name: "Science", marks: 18 },
      { name: "English", marks: 18 },
      { name: "History", marks: 16 },
      { name: "Geography", marks: 16 },
    ],
  },
]

export default function Result() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">🏆 Exam Results</h1>

      {results.map((result, index) => {
        const percentage = Math.round((result.obtainedMarks / result.totalMarks) * 100)
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{result.exam}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Total Marks: {result.totalMarks} | Obtained: {result.obtainedMarks} | Percentage: {percentage}% | Grade: <Badge variant="secondary">{result.grade}</Badge>
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Marks Obtained</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {result.subjects.map((sub, i) => (
                    <TableRow key={i}>
                      <TableCell>{sub.name}</TableCell>
                      <TableCell>{sub.marks}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <p className="text-sm text-muted-foreground">Remarks: {result.remarks}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
