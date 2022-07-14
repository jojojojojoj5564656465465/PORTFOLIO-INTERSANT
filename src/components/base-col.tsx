import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'
import IStyleMap from '../types/style-map'

interface IProps extends IChildrenProps {
  center?: boolean
  style?: IStyleMap
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
  tabIndex?: number
}

const BaseCol = ({
  center = false,
  className = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
  tabIndex,
  children,
}: IProps) => (
  <div
    className={cn('flex flex-col', [center, 'justify-center'], className)}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    tabIndex={tabIndex}
  >
    {children}
  </div>
)

export default BaseCol
