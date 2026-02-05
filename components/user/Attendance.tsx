"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const summary = {
  present: 162,
  absent: 18,
  total: 180,
}

const subjectsAttendance = [
  {
    subject: "Mathematics",
    present: 42,
    total: 45,
  },
  {
    subject: "Science",
    present: 38,
    total: 45,
  },
  {
    subject: "English",
    present: 40,
    total: 45,
  },
  {
    subject: "History",
    present: 42,
    total: 45,
  },
]

export default function Attendance() {
  const percentage = Math.round(
    (summary.present / summary.total) * 100
  )

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">📊 Attendance</h1>

      {/* ===== OVERALL SUMMARY ===== */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Overall Attendance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold">{percentage}%</div>
            <Progress value={percentage} />
            <Badge variant={percentage < 75 ? "destructive" : "default"}>
              {percentage < 75 ? "Below Required" : "Good Standing"}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Present Days</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
            {summary.present} days
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Absent Days</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
            {summary.absent} days
          </CardContent        >
        </Card>
      </div>

      {/* ===== SUBJECT WISE ===== */}
      <Card>
        <CardHeader>
          <CardTitle>Subject-wise Attendance</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {subjectsAttendance.map((item, index) => {
            const percent = Math.round(
              (item.present / item.total) * 100
            )

            return (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.subject}</span>
                  <span>
                    {item.present}/{item.total} ({percent}%)
                  </span>
                </div>
                <Progress value={percent} />
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
