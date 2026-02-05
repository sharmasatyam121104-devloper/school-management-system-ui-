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

const feesData = [
  {
    admissionNo: "A1021",
    name: "Riya Sharma",
    class: "8 - A",
    roll: 12,
    category: "Tuition Fee",
    year: "2025-26",
    total: 30000,
    paid: 30000,
    due: 0,
    mode: "UPI",
    receipt: "RCPT-7812",
    date: "10-Jun-2025",
    staff: "Mr. Patil",
    status: "Paid",
  },
  {
    admissionNo: "A1045",
    name: "Aryan Verma",
    class: "7 - B",
    roll: 6,
    category: "Transport Fee",
    year: "2025-26",
    total: 12000,
    paid: 6000,
    due: 6000,
    mode: "Cash",
    receipt: "RCPT-7920",
    date: "05-Jul-2025",
    staff: "Ms. Joshi",
    status: "Partial",
  },
  {
    admissionNo: "A1090",
    name: "Sneha Singh",
    class: "9 - C",
    roll: 18,
    category: "Tuition Fee",
    year: "2025-26",
    total: 35000,
    paid: 0,
    due: 35000,
    mode: "-",
    receipt: "-",
    date: "-",
    staff: "-",
    status: "Pending",
  },
]

export default function SchoolFeesTable() {
  return (
    <Table>
      <TableCaption>School Fees Collection Record</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Adm No</TableHead>
          <TableHead>Student</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Fee Type</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Paid</TableHead>
          <TableHead>Due</TableHead>
          <TableHead>Mode</TableHead>
          <TableHead>Receipt</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {feesData.map((f) => (
          <TableRow key={f.admissionNo}>
            <TableCell>{f.admissionNo}</TableCell>

            <TableCell>
              <div className="font-medium">{f.name}</div>
              <div className="text-xs text-muted-foreground">
                Roll No: {f.roll}
              </div>
            </TableCell>

            <TableCell>{f.class}</TableCell>
            <TableCell>{f.category}</TableCell>

            <TableCell>₹{f.total}</TableCell>
            <TableCell className="text-green-600 font-medium">
              ₹{f.paid}
            </TableCell>
            <TableCell className="text-red-600 font-medium">
              ₹{f.due}
            </TableCell>

            <TableCell>{f.mode}</TableCell>
            <TableCell>{f.receipt}</TableCell>

            <TableCell>
              <Badge
                variant={
                  f.status === "Paid"
                    ? "default"
                    : f.status === "Partial"
                    ? "secondary"
                    : "destructive"
                }
              >
                {f.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
