"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

const studentProfile = {
  personal: {
    name: "Satyam Sharma",
    dob: "01 Jan 2012",
    gender: "Male",
    bloodGroup: "O+",
    photo: "/student-photo.jpg",
  },
  academic: {
    admissionNo: "ADM2026001",
    rollNo: "10",
    class: "10",
    section: "A",
    category: "General",
    nationality: "Indian",
    religion: "Hindu",
  },
  contact: {
    address: "123, ABC Street, Mumbai, Maharashtra",
    phone: "+91 9876543210",
    email: "satyam.sharma@example.com",
  },
  parent: {
    fatherName: "Mr. Rajesh Sharma",
    fatherPhone: "+91 9123456780",
    motherName: "Mrs. Sunita Sharma",
    motherPhone: "+91 9988776655",
  },
  emergency: {
    contactPerson: "Mr. Rajesh Sharma",
    relation: "Father",
    contactNumber: "+91 9123456780",
  },
  documents: {
    aadhaar: "XXXX-XXXX-XXXX",
    tcNumber: "TC2026/001",
  },
}

export default function Profile() {
  return (
    <ScrollArea className="h-[calc(100vh-150px)] pr-2">
      <div className="space-y-6">

        {/* ===== HEADER ===== */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src={studentProfile.personal.photo} alt={studentProfile.personal.name} />
            <AvatarFallback>{studentProfile.personal.name.split(" ").map(n=>n[0]).join("")}</AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-2xl font-bold">{studentProfile.personal.name}</h1>
            <p className="text-muted-foreground">
              Class {studentProfile.academic.class} - {studentProfile.academic.section} | Roll No: {studentProfile.academic.rollNo}
            </p>
            <Badge variant="secondary">{studentProfile.personal.gender}</Badge>
          </div>
        </div>

        {/* ===== PERSONAL INFO ===== */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>DOB: {studentProfile.personal.dob}</div>
            <div>Blood Group: {studentProfile.personal.bloodGroup}</div>
            <div>Category: {studentProfile.academic.category}</div>
            <div>Nationality: {studentProfile.academic.nationality}</div>
            <div>Religion: {studentProfile.academic.religion}</div>
          </CardContent>
        </Card>

        {/* ===== CONTACT INFO ===== */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>Address: {studentProfile.contact.address}</div>
            <div>Phone: {studentProfile.contact.phone}</div>
            <div>Email: {studentProfile.contact.email}</div>
          </CardContent>
        </Card>

        {/* ===== PARENT / GUARDIAN INFO ===== */}
        <Card>
          <CardHeader>
            <CardTitle>Parent / Guardian</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>Father: {studentProfile.parent.fatherName}</div>
            <div>Father Phone: {studentProfile.parent.fatherPhone}</div>
            <div>Mother: {studentProfile.parent.motherName}</div>
            <div>Mother Phone: {studentProfile.parent.motherPhone}</div>
          </CardContent>
        </Card>

        {/* ===== EMERGENCY CONTACT ===== */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Contact</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>Contact Person: {studentProfile.emergency.contactPerson}</div>
            <div>Relation: {studentProfile.emergency.relation}</div>
            <div>Contact Number: {studentProfile.emergency.contactNumber}</div>
          </CardContent>
        </Card>

        {/* ===== DOCUMENTS INFO ===== */}
        <Card>
          <CardHeader>
            <CardTitle>Documents</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>Aadhaar: {studentProfile.documents.aadhaar}</div>
            <div>Transfer Certificate No: {studentProfile.documents.tcNumber}</div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}
