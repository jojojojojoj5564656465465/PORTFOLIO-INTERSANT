import BaseLink from './base-link'
import VCenterRow from '../v-center-row'
import ILinkProps from '../../types/link-props'
import ChevronRightIcon from '../icons/chevron-right'

const ArrowLink = ({ href, aria, className, children }: ILinkProps) => (
  <VCenterRow className={className}>
    <BaseLink href={href} aria={aria} underline={true}>
      {children}
    </BaseLink>
    <ChevronRightIcon className="ml-2" />
  </VCenterRow>
)

export default ArrowLink
