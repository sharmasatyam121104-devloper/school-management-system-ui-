import {
  GraduationCap,
  Users,
  UserCheck,
  Wallet,
  Bell,
  CalendarDays,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  BookOpen,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function AdminHome() {
  return (
    <div className="p-6 space-y-8">

      {/* ================= Header ================= */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Complete overview of school activities
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline">Academic Year 2025–26</Badge>
          <span className="text-sm text-muted-foreground">
            {new Date().toDateString()}
          </span>
        </div>
      </div>

      {/* ================= KPI CARDS ================= */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6 flex justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Students</p>
              <h2 className="text-3xl font-bold">1,245</h2>
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-4 w-4" /> +4.5% this month
              </p>
            </div>
            <GraduationCap className="h-10 w-10 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Teachers</p>
              <h2 className="text-3xl font-bold">78</h2>
              <p className="text-xs text-muted-foreground mt-1">
                12 Departments
              </p>
            </div>
            <UserCheck className="h-10 w-10 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Parents</p>
              <h2 className="text-3xl font-bold">980</h2>
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-4 w-4" /> Active users
              </p>
            </div>
            <Users className="h-10 w-10 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Fees Collected</p>
              <h2 className="text-3xl font-bold">₹12.4L</h2>
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                <TrendingDown className="h-4 w-4" /> Pending ₹2.1L
              </p>
            </div>
            <Wallet className="h-10 w-10 text-muted-foreground" />
          </CardContent>
        </Card>
      </div>

      {/* ================= Middle Grid ================= */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Attendance Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
            <CardDescription>
              Average attendance of students (dummy data)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Class 10</span>
                <span>92%</span>
              </div>
              <Progress value={92} />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Class 9</span>
                <span>88%</span>
              </div>
              <Progress value={88} />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Class 8</span>
                <span>81%</span>
              </div>
              <Progress value={81} />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Frequently used admin controls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full" variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Publish Notice
            </Button>

            <Button className="w-full" variant="outline">
              <CalendarDays className="h-4 w-4 mr-2" />
              Update Timetable
            </Button>

            <Button className="w-full" variant="outline">
              <GraduationCap className="h-4 w-4 mr-2" />
              Add Student
            </Button>

            <Button className="w-full" variant="outline">
              <BookOpen className="h-4 w-4 mr-2" />
              Assign Class Teacher
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* ================= Bottom Section ================= */}
      <div className="grid gap-6 lg:grid-cols-2">

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>
              Latest system updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>New student admission completed</span>
              <Badge>Just now</Badge>
            </div>
            <Separator />

            <div className="flex justify-between">
              <span>Fees updated for Class 12</span>
              <span className="text-muted-foreground">1 hour ago</span>
            </div>
            <Separator />

            <div className="flex justify-between">
              <span>Teacher assigned to Class 9-A</span>
              <span className="text-muted-foreground">Today</span>
            </div>
          </CardContent>
        </Card>

        {/* Alerts & Reminders */}
        <Card>
          <CardHeader>
            <CardTitle>Alerts & Reminders</CardTitle>
            <CardDescription>
              Important actions required
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex gap-2">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <span>15 students have pending fees</span>
            </div>

            <div className="flex gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <span>Staff salary approval pending</span>
            </div>

            <div className="flex gap-2">
              <AlertCircle className="h-4 w-4 text-blue-500" />
              <span>PTM scheduled on Friday</span>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
