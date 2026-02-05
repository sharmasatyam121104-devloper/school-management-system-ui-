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

const staffData = [
  {
    id: "OS101",
    name: "Ramesh Patil",
    role: "Clerk",
    department: "Office",
    phone: "9876543210",
    joining: "12-Mar-2021",
    type: "Permanent",
    shift: "Morning",
    salary: 18000,
    status: "Active",
  },
  {
    id: "OS102",
    name: "Sunita Kale",
    role: "Accountant",
    department: "Office",
    phone: "9123456780",
    joining: "08-Jan-2020",
    type: "Permanent",
    shift: "Morning",
    salary: 25000,
    status: "Active",
  },
  {
    id: "OS103",
    name: "Mahesh Yadav",
    role: "Watchman",
    department: "Security",
    phone: "9001122334",
    joining: "20-Jun-2022",
    type: "Contract",
    shift: "Night",
    salary: 12000,
    status: "Inactive",
  },
]

export default function Staff() {
  return (
    <Table>
      <TableCaption>School Non-Teaching Staff (Master Data)</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Staff ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Dept</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Joining</TableHead>
          <TableHead>Shift</TableHead>
          <TableHead>Monthly Salary</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {staffData.map((s) => (
          <TableRow key={s.id}>
            <TableCell>{s.id}</TableCell>
            <TableCell className="font-medium">{s.name}</TableCell>
            <TableCell>{s.role}</TableCell>
            <TableCell>{s.department}</TableCell>
            <TableCell>{s.phone}</TableCell>
            <TableCell>{s.joining}</TableCell>
            <TableCell>{s.shift}</TableCell>
            <TableCell>₹{s.salary}</TableCell>
            <TableCell>
              <Badge
                variant={s.status === "Active" ? "secondary" : "outline"}
              >
                {s.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
