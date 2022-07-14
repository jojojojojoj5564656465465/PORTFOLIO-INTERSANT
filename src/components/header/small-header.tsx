import { useState } from 'react'
import VCenterRow from '../v-center-row'
import BaseLink from '../link/base-link'
import MenuOverlay from './menu-overlay'
import MenuOpenButton from './menu-button-open'
//import Search from '../search/search'
import Logo from '../logo'
import LogoDark from '../logo-dark'
import HCenterRow from '../h-center-row'

interface IProps {
  title: string
  tab?: string
  headerMode?: string
  className?: string
}

const SmallHeader = ({ title, tab, headerMode = 'light' }: IProps) => {
  const [expanded, setExpanded] = useState(false)

  // useWindowResize(() => {
  //   setExpanded(false)
  // })

  const _handleClick = () => {
    _toggleHeight()
  }

  const _toggleHeight = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <nav className="p-2 grid grid-cols-5">
        <div>
          <MenuOpenButton headerMode={headerMode} onClick={_handleClick} />
        </div>

        <HCenterRow className="col-span-3 items-center">
          <BaseLink href="/" aria="Goto Homepage">
            {headerMode === 'dark' ? (
              <LogoDark className="w-48" />
            ) : (
              <Logo className="w-48" />
            )}
          </BaseLink>
        </HCenterRow>
        <div></div>
      </nav>

      <MenuOverlay
        title={title}
        page={tab}
        expanded={expanded}
        onClick={_handleClick}
      />
    </>
  )
}

export default SmallHeader
