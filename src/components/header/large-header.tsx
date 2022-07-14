import BaseLink from '../link/base-link'
//import Search from '../search/search'
import ArticleContainer from '../article-container'
import Logo from '../logo'
import HeaderLinks from './header-links'
import LogoDark from '../logo-dark'

interface IProps {
  title: string
  tab?: string
  headerMode?: string
}

const LargeHeader = ({ title, tab, headerMode = 'light' }: IProps) => (
  <nav className="hidden lg:block">
    <ArticleContainer>
      <div className="grid py-4 grid-cols-10 items-center">
        <div className="col-span-3">
          <BaseLink href="/" aria="Goto Homepage">
            {headerMode === 'dark' ? (
              <LogoDark className="w-48" />
            ) : (
              <Logo className="w-48" />
            )}
          </BaseLink>
        </div>
        <HeaderLinks title={title} tab={tab} headerMode={headerMode} />

        <div className="col-span-3" />
      </div>
    </ArticleContainer>
  </nav>
)

export default LargeHeader
