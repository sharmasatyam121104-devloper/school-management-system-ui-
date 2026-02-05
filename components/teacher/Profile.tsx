'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function Profile() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Teacher Profile</h1>

      {/* Top Profile Card */}
      <Card>
        <CardContent className="pt-6 flex flex-col md:flex-row gap-6">

          <div className="flex flex-col items-center gap-2">
            <Avatar className="h-28 w-28">
              <AvatarFallback className="text-2xl">RS</AvatarFallback>
            </Avatar>
            <Badge className="mt-2">Active</Badge>
          </div>

          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-semibold">Rakesh Sharma</h2>
            <p className="text-muted-foreground">
              Senior Mathematics Teacher
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <p><b>Employee ID:</b> TCH-1023</p>
              <p><b>Department:</b> Science & Mathematics</p>
              <p><b>Joining Date:</b> 12 June 2018</p>
              <p><b>Experience:</b> 8 Years</p>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <h3 className="font-semibold text-lg">Personal Information</h3>
          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input disabled value="Rakesh Sharma" />
            <Input disabled value="Male" />
            <Input disabled value="15 Aug 1987" />
            <Input disabled value="B+" />
            <Input disabled value="Indian" />
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <h3 className="font-semibold text-lg">Contact Information</h3>
          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input disabled value="rakesh.sharma@school.edu" />
            <Input disabled value="+91 9876543210" />
            <Input disabled value="+91 9123456789" />
            <Input
              disabled
              value="Mumbai, Maharashtra, India"
            />
          </div>
        </CardContent>
      </Card>

      {/* Academic & Teaching Details */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <h3 className="font-semibold text-lg">Academic & Teaching Details</h3>
          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <p><b>Qualification:</b> M.Sc Mathematics, B.Ed</p>
            <p><b>Subjects Taught:</b> Mathematics, Statistics</p>
            <p><b>Classes Assigned:</b> Class 9, 10, 11, 12</p>
            <p><b>Employment Type:</b> Full Time</p>
          </div>
        </CardContent>
      </Card>

      {/* Documents */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <h3 className="font-semibold text-lg">Documents</h3>
          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline">Aadhaar Card</Button>
            <Button variant="outline">Degree Certificate</Button>
            <Button variant="outline">Appointment Letter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <h3 className="font-semibold text-lg">Account Settings</h3>
          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input disabled value="Username: rsharma" />
            <Input disabled value="Role: Teacher" />
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
