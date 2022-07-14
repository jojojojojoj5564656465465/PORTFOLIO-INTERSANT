import { ReactElement, useState } from 'react'
import IClassProps from '../types/class-props'
import ExpandButton from './expand-button'
import ExpandDetails from './expand-details'

interface IProps extends IClassProps {
  isExpanded?: boolean
  children: ReactElement[]
}

const Expand = ({ isExpanded = true, className, children }: IProps) => {
  const [expanded, setExpanded] = useState(isExpanded)

  const _handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={className}>
      <ExpandButton expanded={expanded} onClick={_handleClick}>
        {children[0]}
      </ExpandButton>

      <ExpandDetails id="expand" expanded={expanded}>
        {children[1]}
      </ExpandDetails>
    </div>
  )
}

export default Expand
