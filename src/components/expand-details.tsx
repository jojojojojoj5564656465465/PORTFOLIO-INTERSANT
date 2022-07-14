import { ReactNode } from 'react'
import AnimateHeight from 'react-animate-height'
//import AnimateHeight from 'react-animate-height'

interface IProps {
  id: string
  expanded: boolean
  className?: string
  children?: ReactNode
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
