import { useState } from 'react'
import cn from '../../lib/class-names'
import HamburgerIcon from '../icons/hamburger'

export const CLS = `p-2 focus:outline-none animate-button border-3 border-solid border-transparent`

export interface IProps {
  headerMode?: string
  onClick: any
}

const MenuOpenButton = ({ headerMode = 'light', onClick }: IProps) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = (e: any) => {
    setHover(true)
  }

  const handleMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(CLS, [
        headerMode === 'dark',
        'text-gray-400 hover:text-gray-50 focus:border-gray-50',
        'hover:text-blue-400 focus:border-blue-200',
      ])}
      aria-label="Open Menu"
    >
      <HamburgerIcon
        className={cn('w-4', [headerMode === 'dark', 'fill-white'])}
      />
    </button>
  )
}

export default MenuOpenButton
