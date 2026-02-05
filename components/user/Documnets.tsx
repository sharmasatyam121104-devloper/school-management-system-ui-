"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const documents = [
  {
    name: "Birth Certificate",
    type: "PDF",
    issuedBy: "Municipal Corporation",
    uploadDate: "01 Jan 2012",
  },
  {
    name: "Report Card - Class 1",
    type: "PDF",
    issuedBy: "ABC School",
    uploadDate: "15 Mar 2013",
  },
  {
    name: "Report Card - Class 5",
    type: "PDF",
    issuedBy: "ABC School",
    uploadDate: "20 Mar 2017",
  },
  {
    name: "Transfer Certificate",
    type: "PDF",
    issuedBy: "ABC School",
    uploadDate: "30 Mar 2026",
  },
  {
    name: "Identity Card",
    type: "Image",
    issuedBy: "ABC School",
    uploadDate: "01 Apr 2016",
  },
]

export default function Documents() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">📂 My Documents</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-base">{doc.name}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Issued By: {doc.issuedBy}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span>Type</span>
                <Badge variant="secondary">{doc.type}</Badge>
              </div>

              <div className="flex justify-between text-sm">
                <span>Upload / Issue Date</span>
                <span>{doc.uploadDate}</span>
              </div>

              <Button size="sm" variant="outline" className="mt-2">
                View / Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
