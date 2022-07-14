import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'
import BaseRow from './base-row'

interface IProps extends IChildrenProps {
  tabIndex?: number
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
}

const HCenterRow = ({
  className,
  tabIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) => {
  return (
    <BaseRow
      className={cn('justify-center', className)}
      tabIndex={tabIndex}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseRow>
  )
}

export default HCenterRow
