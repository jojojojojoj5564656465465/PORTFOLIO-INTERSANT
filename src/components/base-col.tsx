import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'

interface IProps extends IChildrenProps {
  center?: boolean
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
  tabIndex?: number
  tag?: string
}

const BaseCol = ({
  tag = 'div',
  className = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
  tabIndex,
  children,
}: IProps) => {
  switch (tag) {
    case 'section':
      return (
        <section
          className={cn('flex flex-col', className)}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          tabIndex={tabIndex}
        >
          {children}
        </section>
      )
    case 'ul':
      return (
        <ul
          className={cn('flex flex-col', className)}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          tabIndex={tabIndex}
        >
          {children}
        </ul>
      )
    default:
      return (
        <div
          className={cn('flex flex-col', className)}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          tabIndex={tabIndex}
        >
          {children}
        </div>
      )
  }
}

export default BaseCol
