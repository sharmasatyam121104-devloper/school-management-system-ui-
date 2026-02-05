"use client"

import { FC, ReactNode } from "react"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"
import {
  Home,
  Calendar,
  BookOpen,
  ClipboardList,
  BarChart3,
  Wallet,
  Bell,
  User,
  LogOut,
  FileText,
  Award,
} from "lucide-react"

interface ChildrenInterface {
  children: ReactNode
}

const sidebarItems = [
  { label: "Dashboard", href: "/user",  icon: Home },
  { label: "Timetable", href: "/user/time-table", icon: Calendar },
  { label: "Subjects", href: "/user/subject", icon: BookOpen },
  { label: "Assignments", href: "/user/assignment",  icon: ClipboardList },
  { label: "Attendance", href: "/user/attendance",  icon: BarChart3 },
  { label: "Result", href: "/user/result",  icon: Award },         
  { label: "Fees",href: "/user/fees",  icon: Wallet },
  { label: "Your Documents", href: "/user/documents",  icon: FileText }, 
  { label: "Notices", href: "/user/notice",  icon: Bell },
  { label: "Profile", href: "/user/profile",  icon: User },
]


const UserLayout: FC<ChildrenInterface> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">

        {/* ===== SIDEBAR ===== */}
        <Sidebar collapsible="offcanvas">
          <SidebarContent className="py-4">
            <SidebarMenu>
                {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild data-sidebar="close">
                        <Link href={item.href}>
                            <item.icon className="h-4 w-4" />
                            <span>{item.label}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                ))}
            </SidebarMenu>
            </SidebarContent>


          {/* ===== FOOTER ===== */}
          <SidebarFooter>
            <div className="p-4 space-y-3">
              <div className="text-sm">
                <p className="font-semibold">Student Name</p>
                <p className="text-muted-foreground">Class 10 - A</p>
              </div>

              <Button
                variant="destructive"
                size="sm"
                className="w-full flex gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* ===== MAIN AREA ===== */}
        <div className="flex-1 flex flex-col">

          {/* TOP BAR */}
          <header className="h-14 flex items-center gap-3 border-b px-4">
            {/* SidebarTrigger sirf mobile pe dikhe */}
            <div className="md:hidden">
              <SidebarTrigger />
            </div>
            <h1 className="font-semibold text-lg">Student Panel</h1>
          </header>

          {/* CONTENT */}
          <main className="flex-1 p-4 md:p-6 bg-muted/40">
            {children}
          </main>
        </div>

      </div>
    </SidebarProvider>
  )
}

export default UserLayout
