import { ReactNode } from 'react'
import AnimateHeight from 'react-animate-height'
import IChildrenProps from '../types/children-props'
//import AnimateHeight from 'react-animate-height'

interface IProps extends IChildrenProps {
  id: string
  expanded: boolean
}

const ExpandDetails = ({
  id,
  expanded = true,
  className,
  children,
}: IProps) => {
  return (
    <AnimateHeight
      id={id}
      duration={400}
      height={expanded ? 'auto' : 0} // see props documentation below
      className={className}
    >
      {/* <div className={expanded ? 'block': 'hidden'}> */}
      {children}
      {/* </div> */}
    </AnimateHeight>
  )
}

export default ExpandDetails
