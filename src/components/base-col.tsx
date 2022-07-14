import React from 'react'
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
  center = false,
  className = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
  tabIndex,
  children,
}: IProps) => {
  return React.createElement(
    tag,
    {
      className: cn('flex flex-col', [center, 'justify-center'], className),
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      tabIndex: tabIndex,
    },
    children
  )
}

export default BaseCol
