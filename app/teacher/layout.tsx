import TeacherLayout from "@/components/teacher/TeacherLayout"
import { FC, ReactNode } from "react"

interface ChildrenInterface {
    children: ReactNode
}
const TeacherLayoutRouter: FC<ChildrenInterface> = ({children}) => {
  return (
    <TeacherLayout>
        {children}
    </TeacherLayout>
  )
}

export default TeacherLayoutRouter