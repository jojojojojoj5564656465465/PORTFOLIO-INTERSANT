import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'
import IStyleMap from '../types/style-map'
import BaseRow from './base-row'

interface IProps extends IChildrenProps {
  center?: boolean
  style?: IStyleMap
  tabIndex?: number
  onClick?: any
  onKeyDown?: any
  onMouseEnter?: any
  onMouseLeave?: any
}

const VCenterRow = ({
  center = false,
  className = '',
  style,
  tabIndex,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) => {
  return (
    <BaseRow
      center={center}
      className={cn('items-center', className)}
      style={style}
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
