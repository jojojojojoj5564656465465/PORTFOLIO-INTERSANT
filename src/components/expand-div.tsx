import { ReactElement } from 'react'
import IClassProps from '../types/class-props'
import Expand from './expand'
import UnderlineLink from './link/underline-link'

interface IProps extends IClassProps {
  title: string
  href?: string
  isExpanded?: boolean
  children: ReactElement
}

const ExpandDiv = ({
  title,
  href,
  isExpanded = true,
  className,
  children,
}: IProps) => (
  <Expand isExpanded={isExpanded} className={className}>
    <h3 className="text-xl">
      {href ? (
        <UnderlineLink href={href} aria="View article">
          {title}
        </UnderlineLink>
      ) : (
        <>{title}</>
      )}
    </h3>
    {children}
  </Expand>
)

export default ExpandDiv
