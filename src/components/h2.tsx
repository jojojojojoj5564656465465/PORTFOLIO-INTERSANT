import cn from '../lib/class-names'
import IChildrenProps from '../types/children-props'

const H2 = ({ className, children }: IChildrenProps) => (
  <h2 className={cn('uppercase font-light text-xl tracking-wider', className)}>
    {children}
  </h2>
)

export default H2
