import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'

interface IProps extends IChildrenProps {
  title: string
  supertitle?: string
  subtitle?: string
}

const PageTitle = ({
  title,
  supertitle = '',
  subtitle = '',
  className,
  children,
}: IProps) => (
  <header className={cn('pb-8 md:pb-16 ', className)}>
    {supertitle && <h3 className="text-lg mb-1">{supertitle}</h3>}

    <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>

    {subtitle && <h2 className="text-xl mt-3 font-light">{subtitle}</h2>}
    {children && <h2 className="text-2xl mt-3">{children}</h2>}
  </header>
)

export default PageTitle
