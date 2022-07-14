import { ReactNode } from 'react'
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
  <header className={cn('mb-12', className)}>
    {supertitle && (
      <h2 className="text-lg mb-2 font-light text-gray-500">{supertitle}</h2>
    )}

    <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>

    {subtitle && <h2 className="text-xl mt-4 font-light">{subtitle}</h2>}
    {children && <h2 className="text-2xl mt-4">{children}</h2>}
  </header>
)

export default PageTitle
