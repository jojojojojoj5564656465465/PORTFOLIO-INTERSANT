import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'
import BaseRow from './base-row'

interface IProps extends IChildrenProps {
  tag?: string
  tabIndex?: number
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
}

const HCenterRow = ({
  tag = 'div',
  className,
  tabIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) => {
  return (
    <BaseRow
      tag={tag}
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
