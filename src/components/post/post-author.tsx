import Avatar from '../avatar'
import DateFormatter from './date-formatter'
import IPreviewPost from '../../types/preview-post'
import IClassProps from '../../types/class-props'
import cn from '../../lib/class-names'

interface IProps extends IClassProps {
  post: IPreviewPost
  showAvatar?: boolean
}

const PostAuthor = ({ post, showAvatar = true, className }: IProps) => (
  <div
    className={cn(
      'flex flex-row lg:flex-col items-center justify-between lg:items-start lg:justify-start gap-x-8 gap-y-3',
      className
    )}
  >
    {showAvatar && <Avatar author={post.authors[0]} isSmall={true} />}

    <DateFormatter date={post.date} />
  </div>
)

export default PostAuthor
