import AdminLayout from "@/components/admin/AdminLayout"
import { FC, ReactNode } from "react"

interface ChildrenInterface {
    children: ReactNode
}

const AdminLayoutRouter: FC<ChildrenInterface> = ({children}) => {
  return (
    <AdminLayout>
        {children}
    </AdminLayout>
  )
}

export default AdminLayoutRouter