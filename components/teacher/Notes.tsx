'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

const materialHistory = [
  {
    id: 1,
    title: "Unit 3 – Operating System Notes",
    class: "TY CSE",
    subject: "Operating System",
    type: "PDF",
    date: "12 Feb 2026",
    status: "Active"
  },
  {
    id: 2,
    title: "CPU Scheduling PPT",
    class: "TY CSE",
    subject: "Operating System",
    type: "PPT",
    date: "05 Feb 2026",
    status: "Inactive"
  }
]

export default function Notes() {
  const [fileName, setFileName] = useState("")

  return (
    <div className="space-y-6">

      {/* Header */}
      <h1 className="text-2xl font-bold">Study Material</h1>

      {/* Upload Section */}
      <Card>
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-lg font-semibold">Upload New Material</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Class (e.g. TY CSE)" />
            <Input placeholder="Subject" />
            <Input placeholder="Material Title" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Material Type (PDF / PPT / Link / Video)" />
            <Input
              type="file"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
            <Input placeholder="External Link (optional)" />
          </div>

          <Textarea placeholder="Description / Instructions for students" />

          {fileName && (
            <p className="text-sm text-muted-foreground">
              Selected File: {fileName}
            </p>
          )}

          <Button className="bg-blue-600 hover:bg-blue-700">
            Upload Material
          </Button>
        </CardContent>
      </Card>

      {/* History */}
      <Card>
        <CardContent className="pt-6 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Material History</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Title</th>
                <th className="text-left p-2">Class</th>
                <th className="text-left p-2">Subject</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Uploaded On</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {materialHistory.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">{item.class}</td>
                  <td className="p-2">{item.subject}</td>
                  <td className="p-2">{item.type}</td>
                  <td className="p-2">{item.date}</td>
                  <td className="p-2">
                    <Badge variant={item.status === "Active" ? "default" : "secondary"}>
                      {item.status}
                    </Badge>
                  </td>
                  <td className="p-2 space-x-2">
                    <Button size="sm" variant="outline">Download</Button>
                    <Button size="sm" variant="destructive">Delete</Button>
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
