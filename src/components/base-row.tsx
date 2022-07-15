import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'

interface IProps extends IChildrenProps {
  tag?: string
  onClick?: any
  onKeyDown?: any
  onMouseEnter?: any
  onMouseLeave?: any
  tabIndex?: number
}

const BaseRow = ({
  tag = 'div',
  className = '',
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  tabIndex,
  children,
}: IProps) => {
  switch (tag) {
    case 'section':
      return (
        <section
          className={cn('flex flex-row', className)}
          onClick={onClick}
          onKeyDown={onKeyDown}
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
          className={cn('flex flex-row', className)}
          onClick={onClick}
          onKeyDown={onKeyDown}
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
          className={cn('flex flex-row', className)}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          tabIndex={tabIndex}
        >
          {children}
        </div>
      )
  }
}

export default BaseRow
