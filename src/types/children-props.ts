import { ReactNode } from 'react'
import IClassProps from './class-props'

interface IChildrenProps extends IClassProps {
  children: ReactNode
}

export default IChildrenProps
