import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'
import BaseCol from './base-col'

interface IProps extends IChildrenProps {
  center?: boolean
  tabIndex?: number
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
}

const HCenterCol = ({
  center = false,
  className = '',
  tabIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) => {
  return (
    <BaseCol
      center={center}
      className={cn('items-center', className)}
      tabIndex={tabIndex}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseCol>
  )
}

export default HCenterCol
