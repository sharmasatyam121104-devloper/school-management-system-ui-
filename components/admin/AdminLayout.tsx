import { FC, ReactNode } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "../ui/sidebar";
import { Button } from "../ui/button";
import {
  Camera,
  ClipboardClock,
  GraduationCap,
  Home,
  LogOut,
  Megaphone,
  Shapes,
  Shield,
  UserCog,
  UserPlus2,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";

interface ChildrenInterface {
  children: ReactNode;
}

const adminMenu = [
  { label: "Dashboard", href: "/admin", icon: Home },
  { label: "Students", href: "/admin/student", icon: GraduationCap },
  { label: "Parents", href: "/admin/parents", icon: UserPlus2 },
  { label: "Teachers", href: "/admin/teacher", icon: Users },
  { label: "Fees", href: "/admin/fees", icon: Wallet },
  { label: "Other Staff", href: "/admin/staff", icon: UserCog },
  { label: "Staff Salary", href: "/admin/salary", icon: Wallet },
  { label: "Camera Surveillance", href: "/admin/camera", icon: Camera },
  { label: "ClassRomm", href: "/admin/class-room", icon: Shapes },
  { label: "NoticeBoard", href: "/admin/notice-board", icon: Megaphone },
  { label: "Daily Time-Table", href: "/admin/daily-time-table", icon: ClipboardClock },
];

const AdminLayout: FC<ChildrenInterface> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarContent className="mx-2 py-3 font-bold">
            <SidebarMenu>
              {adminMenu.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" strokeWidth={2.75} />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          {/* Footer */}
          <SidebarFooter>
            <div className="w-full rounded-xl bg-linear-to-br from-slate-800 to-slate-900 p-4 flex flex-col items-center gap-3 shadow-lg">
              <div className="h-16 w-16 rounded-full bg-slate-700 flex items-center justify-center text-white text-xl font-semibold">
                SS
              </div>

              <h1 className="text-lg font-semibold text-white">
                Satyam Sharma
              </h1>

              <div className="flex items-center gap-1 text-sm text-slate-300">
                <Shield className="h-4 w-4" />
                <span>Admin</span>
              </div>

              <Button
                variant="destructive"
                size="sm"
                className="mt-2 w-full flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Page Content */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
