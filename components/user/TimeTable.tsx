"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const timetableData = [
  {
    day: "Monday",
    lectures: [
      { time: "9:00 - 9:45", subject: "Mathematics", teacher: "Mr. Sharma", room: "Room 101" },
      { time: "9:45 - 10:30", subject: "Science", teacher: "Ms. Patil", room: "Lab 1" },
      { time: "10:45 - 11:30", subject: "English", teacher: "Mrs. Khan", room: "Room 102" },
      { time: "11:30 - 12:15", subject: "History", teacher: "Mr. Singh", room: "Room 103" },
    ],
  },
  {
    day: "Tuesday",
    lectures: [
      { time: "9:00 - 9:45", subject: "Science", teacher: "Ms. Patil", room: "Lab 1" },
      { time: "9:45 - 10:30", subject: "Mathematics", teacher: "Mr. Sharma", room: "Room 101" },
      { time: "10:45 - 11:30", subject: "Geography", teacher: "Mrs. Rao", room: "Room 104" },
      { time: "11:30 - 12:15", subject: "English", teacher: "Mrs. Khan", room: "Room 102" },
    ],
  },
]

export default function TimeTable() {
  return (
    <div className="space-y-6">

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Calendar/> Weekly Timetable</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">

          {timetableData.map((dayData) => (
            <div key={dayData.day} className="space-y-3">
              <h2 className="text-lg font-semibold">{dayData.day}</h2>

              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Time</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Teacher</TableHead>
                      <TableHead>Room</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {dayData.lectures.map((lec, index) => (
                      <TableRow key={index}>
                        <TableCell>{lec.time}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{lec.subject}</Badge>
                        </TableCell>
                        <TableCell>{lec.teacher}</TableCell>
                        <TableCell>{lec.room}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}

        </CardContent>
      </Card>

    </div>
  )
}
