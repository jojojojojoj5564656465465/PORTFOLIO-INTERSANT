import { ReactElement } from 'react'
import cn from '../../lib/class-names'
import IChildProps from '../../types/child-props'
import ExpandDiv from '../expand-div'

interface IProps extends IChildProps {
  title: string
}

const ReviewExpandDiv = ({ title, className, children }: IProps) => (
  <ExpandDiv
    title={title}
    className={cn('border border-slate-200  p-6 rounded-md', className)}
  >
    {children}
  </ExpandDiv>
)

export default ReviewExpandDiv
