import HEADER_LINKS from '../../../content/menus/header.json'
import ILink from '../../types/link'
import HeaderLink from './header-link'
import HeaderLinkDark from './header-link-dark'

interface IProps {
  title: string
  tab?: string
  headerMode?: string
  onClick?: any
}

const HeaderLinks = ({
  title,
  tab = '',
  headerMode = 'light',
  onClick,
}: IProps) => {
  if (!tab) {
    tab = title
  }

  tab = tab.toLowerCase()

  return (
    <ul
      className="flex flex-row flex-nowrap items-center justify-center col-span-4 gap-8"
      style={{ fontFamily: 'Poppins' }}
    >
      {HEADER_LINKS.map((link: ILink, index: number) => {
        const selected = link.name.toLowerCase() === tab

        return (
          <li key={index} className="inline">
            {headerMode === 'dark' ? (
              <HeaderLinkDark
                link={link}
                selected={selected}
                onClick={onClick}
              />
            ) : (
              <HeaderLink link={link} selected={selected} onClick={onClick} />
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderLinks
