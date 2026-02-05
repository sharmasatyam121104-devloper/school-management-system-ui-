import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const classrooms = [
  {
    id: "CR-101",
    class: "1",
    section: "A",
    roomNo: "101",
    floor: "Ground",
    capacity: 40,
    cameras: 2,
    board: "Smart Board",
    status: "Active",
  },
  {
    id: "CR-102",
    class: "1",
    section: "B",
    roomNo: "102",
    floor: "Ground",
    capacity: 38,
    cameras: 2,
    board: "Blackboard",
    status: "Active",
  },
  {
    id: "CR-203",
    class: "5",
    section: "A",
    roomNo: "203",
    floor: "First",
    capacity: 45,
    cameras: 1,
    board: "Smart Board",
    status: "Maintenance",
  },
  {
    id: "CR-305",
    class: "10",
    section: "A",
    roomNo: "305",
    floor: "Second",
    capacity: 50,
    cameras: 2,
    board: "Smart Board",
    status: "Active",
  },
]

export default function ClassroomTable() {
  return (
    <Table>
      <TableCaption>School Classroom Master Details</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Classroom ID</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Section</TableHead>
          <TableHead>Room No</TableHead>
          <TableHead>Floor</TableHead>
          <TableHead>Capacity</TableHead>
          <TableHead>Cameras</TableHead>
          <TableHead>Board</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {classrooms.map((room) => (
          <TableRow key={room.id}>
            <TableCell>{room.id}</TableCell>
            <TableCell>Class {room.class}</TableCell>
            <TableCell>{room.section}</TableCell>
            <TableCell>{room.roomNo}</TableCell>
            <TableCell>{room.floor}</TableCell>
            <TableCell>{room.capacity}</TableCell>
            <TableCell>{room.cameras}</TableCell>
            <TableCell>{room.board}</TableCell>
            <TableCell>
              <Badge
                variant={
                  room.status === "Active"
                    ? "secondary"
                    : "destructive"
                }
              >
                {room.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
