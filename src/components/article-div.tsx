import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'
import HCenterRow from './h-center-row'

const ArticleDiv = ({ className, children }: IChildrenProps) => (
  <HCenterRow className={cn('w-full', className)}>
    <div className="w-11/12 2xl:w-10/12 3xl:w-8/12">{children}</div>
  </HCenterRow>
)

export default ArticleDiv
