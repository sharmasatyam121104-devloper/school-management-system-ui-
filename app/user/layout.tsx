import UserLayout from '@/components/user/UserLayout'
import { FC, ReactNode } from 'react'

interface ChildrenInterface {
    children: ReactNode
}

const UserLayoutRouter: FC<ChildrenInterface> = ({children}) => {
  return (
    <UserLayout>
      {children}
    </UserLayout>
  )
}

export default UserLayoutRouter