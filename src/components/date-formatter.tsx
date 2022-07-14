import { parseISO, format } from 'date-fns'
import cn from '../lib/class-names'

interface IProps {
  date: string
  className?: string
}

const DateFormatter = ({ date, className }: IProps) => {
  const d = parseISO(date)
  return (
    <time
      dateTime={date}
      className={cn('block text-sm text-gray-400', className)}
    >
      {format(d, 'LLL	d, yyyy')}
    </time>
  )
}

export default DateFormatter
