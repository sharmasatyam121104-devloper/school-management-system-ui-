import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, User } from "lucide-react"

const notices = [
  {
    id: 1,
    title: "Mid-Term Exam Schedule",
    message:
      "Mid-term exams will start from 15th February. Students are requested to prepare accordingly.",
    type: "Exam",
    audience: "Students",
    issuedBy: "Principal",
    issuedDate: "01 Feb 2026",
    expiry: "20 Feb 2026",
  },
  {
    id: 2,
    title: "Republic Day Holiday",
    message:
      "School will remain closed on 26th January on the occasion of Republic Day.",
    type: "Holiday",
    audience: "All",
    issuedBy: "Admin Office",
    issuedDate: "20 Jan 2026",
    expiry: "26 Jan 2026",
  },
  {
    id: 3,
    title: "Parent Teacher Meeting",
    message:
      "PTM will be held on 10th February. Parents are requested to attend.",
    type: "Event",
    audience: "Parents",
    issuedBy: "Management",
    issuedDate: "02 Feb 2026",
    expiry: "10 Feb 2026",
  },
]

export default function NoticeBoard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">School Notice Board</h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {notices.map((notice) => (
          <Card key={notice.id} className="hover:shadow-lg transition">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  {notice.title}
                </CardTitle>

                <Badge variant="outline">{notice.type}</Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                {notice.message}
              </p>

              <div className="flex items-center justify-between text-sm">
                <Badge variant="secondary">
                  {notice.audience}
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User size={16} />
                Issued By: {notice.issuedBy}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays size={16} />
                {notice.issuedDate} → {notice.expiry}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
