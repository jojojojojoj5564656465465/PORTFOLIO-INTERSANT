import { useState } from 'react'
import VCenterRow from '../v-center-row'
import BaseLink from '../link/base-link'
import MenuOverlay from './menu-overlay'
import MenuOpenButton from './menu-button-open'
//import Search from '../search/search'
import Logo from '../logo'
import useWindowResize from '../../hooks/use-window-resize'
import LogoDark from '../logo-dark'

interface IProps {
  title: string
  tab?: string
  headerMode?: string
  className?: string
}

const SmallHeader = ({
  title,
  tab = '',
  headerMode = 'light',
  className,
}: IProps) => {
  const [expanded, setExpanded] = useState(false)

  useWindowResize((e: any) => {
    setExpanded(false)
  })

  const _handleClick = () => {
    _toggleHeight()
  }

  const _toggleHeight = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <VCenterRow className="flex lg:hidden w-full justify-between p-2 pl-6">
        <BaseLink href="/" aria="Goto Homepage">
          {headerMode === 'dark' ? (
            <LogoDark className="w-48" />
          ) : (
            <Logo className="w-48" />
          )}
        </BaseLink>

        <MenuOpenButton headerMode={headerMode} onClick={_handleClick} />
      </VCenterRow>

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
