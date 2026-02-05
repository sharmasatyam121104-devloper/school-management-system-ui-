"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const notices = [
  {
    title: "Annual Sports Day",
    issuedBy: "Principal",
    date: "01 Feb 2026",
    type: "Event",
    description:
      "The Annual Sports Day will be held on 15th February 2026. All students are expected to participate. Please follow the dress code.",
  },
  {
    title: "Exam Schedule Released",
    issuedBy: "Exam Department",
    date: "25 Jan 2026",
    type: "Exam",
    description:
      "Half-Yearly Exam schedule has been released. Check the timetable and prepare accordingly.",
  },
  {
    title: "Fee Reminder",
    issuedBy: "Accounts Department",
    date: "20 Jan 2026",
    type: "Fee",
    description:
      "Please clear the pending fees by 10th February 2026 to avoid late payment penalties.",
  },
  {
    title: "Library Maintenance",
    issuedBy: "Librarian",
    date: "18 Jan 2026",
    type: "General",
    description:
      "Library will remain closed for maintenance on 22nd January 2026. Plan your book returns accordingly.",
  },
]

const typeVariantMap: Record<string, "default" | "secondary" | "destructive"> = {
  General: "default",
  Exam: "secondary",
  Fee: "destructive",
  Event: "secondary",
}

export default function Notice() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">📰 Notices</h1>

      <ScrollArea className="h-[600px] pr-2">
        <div className="space-y-4">
          {notices.map((notice, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base">{notice.title}</CardTitle>
                  <Badge variant={typeVariantMap[notice.type]}>{notice.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Issued By: {notice.issuedBy} | Date: {notice.date}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{notice.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
