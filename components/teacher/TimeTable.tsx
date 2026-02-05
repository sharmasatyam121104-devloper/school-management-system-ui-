"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, Users, MapPin } from "lucide-react"

const timetable = [
  {
    day: "Monday",
    lectures: [
      {
        time: "09:00 - 09:45",
        class: "10-A",
        subject: "Mathematics",
        room: "Room 12",
      },
      {
        time: "10:00 - 10:45",
        class: "9-B",
        subject: "Mathematics",
        room: "Room 10",
      },
    ],
  },
  {
    day: "Tuesday",
    lectures: [
      {
        time: "09:00 - 09:45",
        class: "10-B",
        subject: "Mathematics",
        room: "Room 11",
      },
      {
        time: "11:00 - 11:45",
        class: "8-A",
        subject: "Mathematics",
        room: "Room 08",
      },
    ],
  },
  {
    day: "Wednesday",
    lectures: [
      {
        time: "10:00 - 10:45",
        class: "9-A",
        subject: "Mathematics",
        room: "Room 09",
      },
    ],
  },
  {
    day: "Thursday",
    lectures: [
      {
        time: "09:00 - 09:45",
        class: "10-A",
        subject: "Mathematics",
        room: "Room 12",
      },
      {
        time: "10:00 - 10:45",
        class: "10-B",
        subject: "Mathematics",
        room: "Room 11",
      },
    ],
  },
  {
    day: "Friday",
    lectures: [
      {
        time: "11:00 - 11:45",
        class: "9-B",
        subject: "Mathematics",
        room: "Room 10",
      },
    ],
  },
]

export default function Timetable() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Weekly Timetable</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {timetable.map((day, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {day.day}
                <Badge variant="secondary">
                  {day.lectures.length} Lectures
                </Badge>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              {day.lectures.map((lec, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-3 space-y-2 bg-muted/30"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{lec.time}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>Class: {lec.class}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4" />
                    <span>Subject: {lec.subject}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{lec.room}</span>
                  </div>
                </div>
              ))}

              {day.lectures.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No lectures scheduled
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
