'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const students = [
  { roll: 1, name: "Rahul Sharma" },
  { roll: 2, name: "Aman Verma" },
  { roll: 3, name: "Sneha Patil" },
]

export default function Result() {
  const [marks, setMarks] = useState<Record<number, number>>({})

  const handleMarksChange = (roll: number, value: number) => {
    setMarks({ ...marks, [roll]: value })
  }

  const getGrade = (mark: number) => {
    if (mark >= 75) return "A"
    if (mark >= 60) return "B"
    if (mark >= 40) return "C"
    return "F"
  }

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Result Management</h1>
        <Button variant="outline">Export Excel</Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
          <Input placeholder="Class (e.g. TY CSE)" />
          <Input placeholder="Subject" />
          <Input placeholder="Exam Type" />
          <Input type="date" />
        </CardContent>
      </Card>

      {/* Result Table */}
      <Card>
        <CardContent className="pt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Roll No</th>
                <th className="text-left p-2">Student Name</th>
                <th className="text-left p-2">Marks</th>
                <th className="text-left p-2">Grade</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => {
                const mark = marks[student.roll] || 0
                const grade = getGrade(mark)
                return (
                  <tr key={student.roll} className="border-b">
                    <td className="p-2">{student.roll}</td>
                    <td className="p-2">{student.name}</td>
                    <td className="p-2 w-32">
                      <Input
                        type="number"
                        value={mark}
                        onChange={(e) =>
                          handleMarksChange(student.roll, Number(e.target.value))
                        }
                      />
                    </td>
                    <td className="p-2">{grade}</td>
                    <td className="p-2">
                      <Badge variant={mark >= 40 ? "default" : "destructive"}>
                        {mark >= 40 ? "Pass" : "Fail"}
                      </Badge>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Submit */}
      <div className="flex justify-end">
        <Button className="bg-green-600 hover:bg-green-700">
          Submit Result to Admin
        </Button>
      </div>
    </div>
  )
}
