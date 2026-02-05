import { FC, ReactNode } from "react"

interface ChildrenInterface {
    children: ReactNode
}

const TeacherLayout: FC<ChildrenInterface> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default TeacherLayout