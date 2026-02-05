"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Users,
  GraduationCap,
  Clock,
  MapPin,
  Eye,
  NotebookPen,
  ClipboardCheck,
} from "lucide-react"

const subjects = [
  {
    subject: "Mathematics",
    class: "10-A",
    board: "SSC",
    medium: "English",
    weeklyLectures: 6,
    room: "Room 12",
    totalStudents: 38,
    status: "Active",
  },
  {
    subject: "Mathematics",
    class: "10-B",
    board: "SSC",
    medium: "English",
    weeklyLectures: 5,
    room: "Room 11",
    totalStudents: 36,
    status: "Active",
  },
  {
    subject: "Mathematics",
    class: "9-A",
    board: "SSC",
    medium: "English",
    weeklyLectures: 5,
    room: "Room 09",
    totalStudents: 40,
    status: "Active",
  },
]

export default function Subjects() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">My Subjects & Classes</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {item.subject}
                </div>
                <Badge variant="secondary">{item.status}</Badge>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>
                  Class: <strong>{item.class}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Total Students: {item.totalStudents}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Weekly Lectures: {item.weeklyLectures}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{item.room}</span>
              </div>

              <div className="flex gap-2 text-xs">
                <Badge variant="outline">{item.board}</Badge>
                <Badge variant="outline">{item.medium} Medium</Badge>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2 pt-3 flex-wrap">
                <Button size="sm" variant="outline" className="gap-1">
                  <Eye className="h-4 w-4" />
                  Students
                </Button>

                <Button size="sm" variant="outline" className="gap-1">
                  <NotebookPen className="h-4 w-4" />
                  Notes
                </Button>

                <Button size="sm" variant="outline" className="gap-1">
                  <ClipboardCheck className="h-4 w-4" />
                  Attendance
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
