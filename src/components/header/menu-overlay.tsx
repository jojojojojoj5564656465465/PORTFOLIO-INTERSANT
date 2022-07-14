import { animated, useSpring } from 'react-spring'
import cn from '../../lib/class-names'
import MenuCloseButton from './menu-button-close'
import MenuLinks from './menu-links'

interface IProps {
  title: string
  page?: string
  expanded: boolean
  onClick: any
}

const MenuOverlay = ({ title, page, expanded, onClick }: IProps) => {
  const menuAnimation = useSpring({
    opacity: expanded ? 1 : 0,
  })

  const menuAnimation2 = useSpring({
    transform: expanded ? `translateX(0)` : `translateX(-100%)`,
    delay: 100,
  })

  return (
    <animated.div
      className={cn(
        'fixed flex flex-row flex-nowrap left-0 top-0 w-full h-screen z-50 bg-black-80',
        [expanded, 'visible', 'hidden']
      )}
      style={menuAnimation}
      onClick={onClick}
    >
      <animated.div
        className="flex flex-row flex-nowrap h-full w-96 bg-white"
        style={menuAnimation2}
        onClick={onClick}
      >
        <div className="p-2 w-full">
          <MenuLinks title={title} tab={page} onClick={onClick} />
        </div>
      </animated.div>

      <div className="flex flex-row items-start justify-center w-16 pt-1">
        <MenuCloseButton onClick={onClick} />
      </div>
    </animated.div>
  )
}

export default MenuOverlay
