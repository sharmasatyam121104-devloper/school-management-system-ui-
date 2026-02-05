"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const assignments = [
  {
    title: "Algebra Worksheet",
    subject: "Mathematics",
    teacher: "Mr. Sharma",
    dueDate: "12 Sep 2026",
    status: "Pending",
  },
  {
    title: "Science Lab Report",
    subject: "Science",
    teacher: "Ms. Patil",
    dueDate: "10 Sep 2026",
    status: "Submitted",
  },
  {
    title: "Essay on Independence Day",
    subject: "English",
    teacher: "Mrs. Khan",
    dueDate: "08 Sep 2026",
    status: "Late",
  },
]

const statusVariantMap: Record<
  string,
  "default" | "secondary" | "destructive"
> = {
  Pending: "secondary",
  Submitted: "default",
  Late: "destructive",
}

export default function Assignment() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">📝 Assignments</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {assignments.map((item, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{item.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {item.subject}
              </p>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Teacher</span>
                <span>{item.teacher}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Due Date</span>
                <span>{item.dueDate}</span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <Badge variant={statusVariantMap[item.status]}>
                  {item.status}
                </Badge>

                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
