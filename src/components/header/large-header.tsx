import BaseLink from '../link/base-link'
//import Search from '../search/search'
import ArticleContainer from '../article-container'
import Logo from '../logo'
import HeaderLinks from './header-links'

interface IProps {
  title: string
  tab?: string
}

const LargeHeader = ({ title, tab }: IProps) => (
  <ArticleContainer className="hidden lg:flex">
    <nav className="grid py-4 grid-cols-10">
      <div className="col-span-3">
        <BaseLink href="/" aria="Goto Homepage">
          <Logo className="w-48" />
        </BaseLink>
      </div>
      <HeaderLinks title={title} tab={tab} />

      <div className="col-span-3" />
    </nav>
  </ArticleContainer>
)

export default LargeHeader
