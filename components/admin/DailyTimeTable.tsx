"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DailyTimeTable() {
  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">School Timetable</h1>

        <Select>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Select Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Class 1</SelectItem>
            <SelectItem value="5">Class 5</SelectItem>
            <SelectItem value="10">Class 10</SelectItem>
            <SelectItem value="12">Class 12</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Day Tabs */}
      <Tabs defaultValue="monday" className="w-full">
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="monday">Monday</TabsTrigger>
          <TabsTrigger value="tuesday">Tuesday</TabsTrigger>
          <TabsTrigger value="wednesday">Wednesday</TabsTrigger>
          <TabsTrigger value="thursday">Thursday</TabsTrigger>
          <TabsTrigger value="friday">Friday</TabsTrigger>
          <TabsTrigger value="saturday">Saturday</TabsTrigger>
        </TabsList>

        {/* One Day Content (same UI for all days) */}
        <TabsContent value="monday" className="space-y-4">

          {/* Add Lecture */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Lecture</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Lecture</DialogTitle>
              </DialogHeader>

              <div className="space-y-3">
                <Input placeholder="Time (09:00 - 09:45)" />
                <Input placeholder="Subject" />
                <Input placeholder="Teacher Name" />
                <Input placeholder="Classroom / Room No." />
                <Button className="w-full">Save Lecture</Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Timetable Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>09:00 - 09:45</TableCell>
                <TableCell>Mathematics</TableCell>
                <TableCell>Mr. Sharma</TableCell>
                <TableCell>Room 101</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">Edit</Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>09:45 - 10:30</TableCell>
                <TableCell>English</TableCell>
                <TableCell>Ms. Patil</TableCell>
                <TableCell>Room 101</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">Edit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TabsContent>
      </Tabs>
    </div>
  )
}
