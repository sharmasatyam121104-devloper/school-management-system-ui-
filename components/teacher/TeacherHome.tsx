"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import {
  Calendar,
  ClipboardCheck,
  BookOpen,
  FileText,
  Bell,
  Upload,
} from "lucide-react"

export default function TeacherHome() {
  return (
    <div className="space-y-6">

      {/* ===== PAGE TITLE ===== */}
      <h1 className="text-2xl font-bold">Teacher Dashboard</h1>

      {/* ===== SUMMARY CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Today's Lectures"
          value="5 Classes"
          icon={<Calendar />}
        />
        <SummaryCard
          title="Pending Assignments"
          value="12"
          icon={<ClipboardCheck />}
        />
        <SummaryCard
          title="Subjects & Classes"
          value="6 Subjects"
          icon={<BookOpen />}
        />
        <SummaryCard
          title="Papers to Check"
          value="3"
          icon={<FileText />}
        />
      </div>

      {/* ===== MAIN SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ===== TODAY TIMETABLE ===== */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Today&apos;s Timetable</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            {[
              {
                time: "09:00 - 09:45",
                class: "Class 10-A",
                subject: "Mathematics",
              },
              {
                time: "10:00 - 10:45",
                class: "Class 9-B",
                subject: "Mathematics",
              },
              {
                time: "12:00 - 12:45",
                class: "Class 12-C",
                subject: "Statistics",
              },
            ].map((lec, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border rounded-lg p-3"
              >
                <div>
                  <p className="font-medium">{lec.subject}</p>
                  <p className="text-sm text-muted-foreground">
                    {lec.class} • {lec.time}
                  </p>
                </div>

                <Button size="sm">Mark Attendance</Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* ===== QUICK ACTIONS ===== */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-3">
            <Button className="w-full flex gap-2">
              <ClipboardCheck className="h-4 w-4" />
              Create Assignment
            </Button>

            <Button variant="outline" className="w-full flex gap-2">
              <Upload className="h-4 w-4" />
              Upload Notes
            </Button>

            <Button variant="outline" className="w-full flex gap-2">
              <Bell className="h-4 w-4" />
              Send Announcement
            </Button>

            <Button variant="outline" className="w-full flex gap-2">
              <FileText className="h-4 w-4" />
              Upload Exam Paper
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* ===== PENDING TASKS + ACTIVITY ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3 text-sm">
            <Task text="12 Assignments pending for checking" />
            <Task text="Attendance not marked for Class 9-B" />
            <Task text="Unit Test papers pending (Class 10-A)" />
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3 text-sm">
            <Activity text="Attendance marked for Class 12-C" />
            <Activity text="Assignment uploaded (Mathematics)" />
            <Activity text="Result submitted (Unit Test 1)" />
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

/* ===== SMALL COMPONENTS ===== */

function SummaryCard({
  title,
  value,
  icon,
}: {
  title: string
  value: string
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardContent className="pt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
          {icon}
        </div>
      </CardContent>
    </Card>
  )
}

function Task({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-between border rounded-md p-3">
      <p>{text}</p>
      <Badge variant="outline">Pending</Badge>
    </div>
  )
}

function Activity({ text }: { text: string }) {
  return (
    <div className="border rounded-md p-3">
      <p>{text}</p>
    </div>
  )
}
