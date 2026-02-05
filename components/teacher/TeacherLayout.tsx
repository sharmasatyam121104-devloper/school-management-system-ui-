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
  User,
  LogOut,
  ClipboardCheck,
  FileText,
  Megaphone,
  FileArchive,
  Upload,
  Download,
} from "lucide-react"

interface ChildrenInterface {
  children: ReactNode
}

// ===== Teacher Menu Items =====
const teacherMenu = [
  { label: "Dashboard", href: "/teacher", icon: Home },
  { label: "Timetable", href: "/teacher/timetable", icon: Calendar },
  { label: "Subjects", href: "/teacher/subjects", icon: BookOpen },
  { label: "Assignments", href: "/teacher/assignments", icon: ClipboardList },
  { label: "Attendance", href: "/teacher/attendance", icon: ClipboardCheck },
  { label: "Result / Paper Checking", href: "/teacher/result", icon: FileText },
  { label: "Notes / Teaching Material", href: "/teacher/notes", icon: FileArchive },
  { label: "Announcements / Notices", href: "/teacher/announcements", icon: Megaphone },
  { label: "Upload Papers", href: "/teacher/upload-papers", icon: Upload },
  { label: "Download Submissions", href: "/teacher/download", icon: Download },
  { label: "Profile", href: "/teacher/profile", icon: User },
]

const TeacherLayout: FC<ChildrenInterface> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">

        {/* ===== SIDEBAR ===== */}
        <Sidebar collapsible="offcanvas">
          <SidebarContent className="py-4">
            <SidebarMenu>
              {teacherMenu.map((item, idx) => {
                const Icon = item.icon
                return (
                  <SidebarMenuItem key={idx}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href} className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarContent>

          {/* ===== FOOTER ===== */}
          <SidebarFooter>
            <div className="p-4 space-y-3">
              <div className="text-sm">
                <p className="font-semibold">Teacher Name</p>
                <p className="text-muted-foreground">Assigned Class: 10-A, 10-B</p>
              </div>
              <Button variant="destructive" size="sm" className="w-full flex gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* ===== MAIN CONTENT ===== */}
        <div className="flex-1 flex flex-col">

          {/* TOP BAR */}
          <header className="h-14 flex items-center gap-3 border-b px-4">
            {/* SidebarTrigger sirf mobile pe dikhe */}
            <div className="md:hidden">
              <SidebarTrigger />
            </div>
            <h1 className="font-semibold text-lg">Teacher Panel</h1>
          </header>

          {/* CONTENT AREA */}
          <main className="flex-1 p-4 md:p-6 bg-muted/40 overflow-auto">
            {children}
          </main>
        </div>

      </div>
    </SidebarProvider>
  )
}

export default TeacherLayout
