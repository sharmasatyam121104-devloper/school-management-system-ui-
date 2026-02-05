'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

const paperHistory = [
  {
    id: 1,
    title: "Unit Test 2 – DBMS",
    type: "Exam Paper",
    sentTo: "Admin",
    class: "TY CSE",
    date: "15 Feb 2026",
    status: "Submitted"
  },
  {
    id: 2,
    title: "Practice Questions – Normalization",
    type: "Practice Paper",
    sentTo: "Students",
    class: "TY CSE",
    date: "12 Feb 2026",
    status: "Published"
  }
]

export default function UploadPapers() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <h1 className="text-2xl font-bold">Upload Papers</h1>

      {/* Upload Form */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <h2 className="text-lg font-semibold">Upload New Paper</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Paper Title" />
            <Input placeholder="Subject (e.g. DBMS)" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Class (e.g. TY CSE)" />
            <Input placeholder="Paper Type (Exam / Practice)" />
            <Input placeholder="Send To (Admin / Class)" />
          </div>

          <Textarea
            placeholder="Paper Description / Instructions"
            rows={3}
          />

          <Input type="file" />

          <div className="flex gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Upload Paper
            </Button>
            <Button variant="outline">
              Cancel
            </Button>
          </div>

          {/* Info Hint */}
          <p className="text-sm text-muted-foreground">
            📌 Exam papers will be sent to Admin only.  
            📌 Practice papers will be visible to the selected class.
          </p>
        </CardContent>
      </Card>

      {/* Upload History */}
      <Card>
        <CardContent className="pt-6 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Uploaded Papers History</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Sent To</th>
                <th className="p-2 text-left">Class</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {paperHistory.map((paper) => (
                <tr key={paper.id} className="border-b">
                  <td className="p-2">{paper.title}</td>
                  <td className="p-2">
                    <Badge
                      variant={paper.type === "Exam Paper" ? "destructive" : "secondary"}
                    >
                      {paper.type}
                    </Badge>
                  </td>
                  <td className="p-2">{paper.sentTo}</td>
                  <td className="p-2">{paper.class}</td>
                  <td className="p-2">{paper.date}</td>
                  <td className="p-2">
                    <Badge variant="outline">{paper.status}</Badge>
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
