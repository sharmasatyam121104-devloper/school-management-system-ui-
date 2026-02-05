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

const salaryData = [
  {
    empId: "T101",
    name: "Anita Deshmukh",
    roleType: "Teacher",
    designation: "Maths Teacher",
    month: "January",
    year: 2026,
    baseSalary: 35000,
    paid: 35000,
    due: 0,
    mode: "Bank",
    date: "31-Jan-2026",
    ref: "TXN889912",
    status: "Paid",
  },
  {
    empId: "OS102",
    name: "Sunita Kale",
    roleType: "Staff",
    designation: "Accountant",
    month: "January",
    year: 2026,
    baseSalary: 25000,
    paid: 15000,
    due: 10000,
    mode: "Cash",
    date: "30-Jan-2026",
    ref: "-",
    status: "Partial",
  },
  {
    empId: "OS103",
    name: "Mahesh Yadav",
    roleType: "Staff",
    designation: "Watchman",
    month: "January",
    year: 2026,
    baseSalary: 12000,
    paid: 0,
    due: 12000,
    mode: "-",
    date: "-",
    ref: "-",
    status: "Pending",
  },
]

export default function Salary() {
  return (
    <Table>
      <TableCaption>Teacher & Staff Salary Payment Record</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Month</TableHead>
          <TableHead>Base</TableHead>
          <TableHead>Paid</TableHead>
          <TableHead>Due</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {salaryData.map((s) => (
          <TableRow key={s.empId + s.month}>
            <TableCell>{s.empId}</TableCell>

            <TableCell>
              <div className="font-medium">{s.name}</div>
              <div className="text-xs text-muted-foreground">
                {s.designation}
              </div>
            </TableCell>

            <TableCell>
              <Badge variant="outline">{s.roleType}</Badge>
            </TableCell>

            <TableCell>
              {s.month} {s.year}
            </TableCell>

            <TableCell>₹{s.baseSalary}</TableCell>

            <TableCell className="text-green-600 font-medium">
              ₹{s.paid}
            </TableCell>

            <TableCell className="text-red-600 font-medium">
              ₹{s.due}
            </TableCell>

            <TableCell>
              <Badge
                variant={
                  s.status === "Paid"
                    ? "default"
                    : s.status === "Partial"
                    ? "secondary"
                    : "destructive"
                }
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
