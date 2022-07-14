import { ReactElement } from 'react'
import IChildProps from '../types/child-props'
import Expand from './expand'
import UnderlineLink from './link/underline-link'

interface IProps extends IChildProps {
  title: string
  href?: string
  isExpanded?: boolean
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
