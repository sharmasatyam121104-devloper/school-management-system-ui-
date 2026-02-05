import { FC, ReactNode } from "react"

interface ChildrenInterface {
    children: ReactNode
}

const ParentLayout: FC<ChildrenInterface> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default ParentLayout