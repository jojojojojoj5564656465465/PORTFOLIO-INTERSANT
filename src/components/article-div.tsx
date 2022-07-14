import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'

const ArticleDiv = ({ className, children }: IChildrenProps) => (
  <div className={cn('w-11/12 2xl:w-10/12 3xl:w-6/10', className)}>
    {children}
  </div>
)

export default ArticleDiv
