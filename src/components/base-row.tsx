import React from 'react'
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
  return React.createElement(
    tag,
    {
      className: cn('flex flex-row', className),
      onClick: onClick,
      onKeyDown: onKeyDown,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      tabIndex: tabIndex,
    },
    children
  )
}

export default BaseRow
