import ParentLayout from "@/components/parent/ParentLayout"
import { FC, ReactNode } from "react"

interface ChildrenInterface {
    children: ReactNode
}

const ParentLayoutRouter: FC<ChildrenInterface> = ({children}) => {
  return (
    <ParentLayout>
        {children}
    </ParentLayout>
  )
}

export default ParentLayoutRouter