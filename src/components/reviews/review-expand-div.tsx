import { ReactElement } from 'react'
import cn from '../../lib/class-names'
import IClassProps from '../../types/class-props'
import ExpandDiv from '../expand-div'

interface IProps extends IClassProps {
  title: string
  children: ReactElement
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
