import { useState } from 'react'
import CloseIcon from '../icons/close'
import { CLS, IProps } from './menu-button-open'

const MenuCloseButton = ({ onClick }: IProps) => {
  const [hover, setHover] = useState(false)

  const _handleMouseEnter = () => {
    setHover(true)
  }

  const _handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
      className={CLS}
      aria-label="Close Menu"
    >
      <CloseIcon className="w-5 fill-white" />
    </button>
  )
}

export default MenuCloseButton
