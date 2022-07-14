import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'
import IStyleMap from '../types/style-map'
import BaseRow from './base-row'

interface IProps extends IChildrenProps {
  tag?: string
  tabIndex?: number
  onClick?: any
  onKeyDown?: any
  onMouseEnter?: any
  onMouseLeave?: any
}

const VCenterRow = ({
  tag = 'div',
  className = '',
  tabIndex,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) => {
  return (
    <BaseRow
      tag={tag}
      className={cn('items-center', className)}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseRow>
  )
}

export default VCenterRow
