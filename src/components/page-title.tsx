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
  <header
    className={cn(
      'mb-8 md:mb-16 pb-8 md:pb-16 border-b border-gray-200',
      className
    )}
  >
    {supertitle && <h2 className="text-lg mb-1 text-gray-400">{supertitle}</h2>}

    <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>

    {subtitle && <h2 className="text-xl mt-4 font-light">{subtitle}</h2>}
    {children && <h2 className="text-2xl mt-4">{children}</h2>}
  </header>
)

export default PageTitle
