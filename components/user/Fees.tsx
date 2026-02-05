"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const feesData = [
  {
    feeType: "Tuition Fee",
    dueDate: "10 Feb 2026",
    amount: 5000,
    paid: 5000,
    status: "Paid",
  },
  {
    feeType: "Exam Fee",
    dueDate: "15 Feb 2026",
    amount: 1000,
    paid: 0,
    status: "Pending",
  },
  {
    feeType: "Lab Fee",
    dueDate: "20 Feb 2026",
    amount: 500,
    paid: 500,
    status: "Paid",
  },
  {
    feeType: "Library Fine",
    dueDate: "25 Feb 2026",
    amount: 200,
    paid: 0,
    status: "Overdue",
  },
]

const statusVariantMap: Record<string, "default" | "secondary" | "destructive"> = {
  Paid: "default",
  Pending: "secondary",
  Overdue: "destructive",
}

export default function Fees() {
  const totalAmount = feesData.reduce((acc, fee) => acc + fee.amount, 0)
  const totalPaid = feesData.reduce((acc, fee) => acc + fee.paid, 0)
  const balance = totalAmount - totalPaid

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">💰 Fees Overview</h1>

      {/* ===== Summary Card ===== */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Fees</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">{totalAmount} ₹</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Paid</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">{totalPaid} ₹</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Balance</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">{balance} ₹</CardContent>
        </Card>
      </div>

      {/* ===== Detailed Fee Table ===== */}
      <Card>
        <CardHeader>
          <CardTitle>Fee Details</CardTitle>
        </CardHeader>

        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fee Type</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {feesData.map((fee, index) => (
                <TableRow key={index}>
                  <TableCell>{fee.feeType}</TableCell>
                  <TableCell>{fee.dueDate}</TableCell>
                  <TableCell>{fee.amount} ₹</TableCell>
                  <TableCell>{fee.paid} ₹</TableCell>
                  <TableCell>
                    <Badge variant={statusVariantMap[fee.status]}>
                      {fee.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {fee.status !== "Paid" && (
                      <Button size="sm" variant="outline">
                        Pay Now
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
