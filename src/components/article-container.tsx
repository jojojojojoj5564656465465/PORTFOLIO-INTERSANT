import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'
import ArticleDiv from './article-div'
import HCenterRow from './h-center-row'

const ArticleContainer = ({ className, children }: IChildrenProps) => (
  <HCenterRow className={cn('w-full', className)}>
    <ArticleDiv>{children}</ArticleDiv>
  </HCenterRow>
)

export default ArticleContainer
