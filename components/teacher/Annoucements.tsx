'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

const announcementHistory = [
  {
    id: 1,
    title: "Unit Test on Monday",
    sentTo: "TY CSE (Students + Parents)",
    type: "Exam",
    priority: "High",
    date: "14 Feb 2026",
    status: "Delivered"
  },
  {
    id: 2,
    title: "Assignment Submission Reminder",
    sentTo: "Selected Students",
    type: "Assignment",
    priority: "Normal",
    date: "10 Feb 2026",
    status: "Delivered"
  }
]

export default function Announcement() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <h1 className="text-2xl font-bold">Announcements / Notices</h1>

      {/* Create Announcement */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <h2 className="text-lg font-semibold">Create Announcement</h2>

          <Input placeholder="Announcement Title" />

          <Textarea
            placeholder="Write announcement message for students / parents"
            rows={4}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Announcement Type (Exam / Notice / Assignment)" />
            <Input placeholder="Priority (Low / Normal / High)" />
            <Input placeholder="Send To (Class / Students / Parents)" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Select Class (e.g. TY CSE)" />
            <Input placeholder="Select Students (optional)" />
            <Input placeholder="Send Mode (Student / Parent / Both)" />
          </div>

          <Button className="bg-green-600 hover:bg-green-700">
            Send Announcement
          </Button>
        </CardContent>
      </Card>

      {/* Announcement History */}
      <Card>
        <CardContent className="pt-6 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Announcement History</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Sent To</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Priority</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {announcementHistory.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">{item.sentTo}</td>
                  <td className="p-2">{item.type}</td>
                  <td className="p-2">
                    <Badge
                      variant={item.priority === "High" ? "destructive" : "secondary"}
                    >
                      {item.priority}
                    </Badge>
                  </td>
                  <td className="p-2">{item.date}</td>
                  <td className="p-2">
                    <Badge variant="default">{item.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </CardContent>
      </Card>

    </div>
  )
}
