"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Book } from "lucide-react"

const subjects = [
  {
    name: "Mathematics",
    code: "MTH101",
    teacher: "Mr. Sharma",
    type: "Theory",
    lectures: "5 / week",
  },
  {
    name: "Science",
    code: "SCI102",
    teacher: "Ms. Patil",
    type: "Practical",
    lectures: "4 / week",
  },
  {
    name: "English",
    code: "ENG103",
    teacher: "Mrs. Khan",
    type: "Theory",
    lectures: "4 / week",
  },
  {
    name: "History",
    code: "HIS104",
    teacher: "Mr. Singh",
    type: "Theory",
    lectures: "3 / week",
  },
]

export default function Subject() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold flex items-center gap-2"><Book/> My Subjects</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{subject.name}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Code: {subject.code}
              </p>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Teacher</span>
                <span>{subject.teacher}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Lectures</span>
                <span>{subject.lectures}</span>
              </div>

              <div className="flex justify-end">
                <Badge variant="secondary">{subject.type}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
