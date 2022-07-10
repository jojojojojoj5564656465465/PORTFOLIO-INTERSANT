import { parseISO, format } from 'date-fns'

interface IProps {
  date: string
  className?: string
}

const DateFormatter = ({ date, className }: IProps) => {
  const d = parseISO(date)
  return (
    <time dateTime={date} className={className}>
      {format(d, 'LLL	d, yyyy')}
    </time>
  )
}

export default DateFormatter
