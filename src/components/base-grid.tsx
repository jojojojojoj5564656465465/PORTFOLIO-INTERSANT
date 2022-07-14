import React from 'react'
import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'

interface IProps extends IChildrenProps {
  tag?: string
  cols?: number
}

const BaseGrid = ({
  tag = 'div',
  cols = 4,
  className = '',
  children,
}: IProps) => {
  return React.createElement(
    tag,
    {
      className: cn(`grid grid-cols-${cols}`, className),
    },
    children
  )
}

export default BaseGrid
