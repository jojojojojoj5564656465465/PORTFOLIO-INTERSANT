import HEADER_LINKS from '../../../content/menus/header.json'
import ILink from '../../types/link'
import BaseLink from '../link/base-link'

interface IProps {
  title: string
  tab?: string
  onClick?: any
}

const MenuLinks = ({ title, tab = '', onClick }: IProps) => (
  <ul>
    {HEADER_LINKS.map((link: ILink, index: number) => {
      const selected = title == link.name || tab == link.name

      return (
        <li key={index}>
          <BaseLink
            href={link.url}
            aria={`Visit ${link.name}`}
            className="block rounded px-8 py-4 hover:bg-gray-100"
            onClick={onClick}
          >
            {link.name}
          </BaseLink>
        </li>
      )
    })}
  </ul>
)

export default MenuLinks
