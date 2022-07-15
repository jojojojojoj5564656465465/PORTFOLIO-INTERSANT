import cn from '../../lib/class-names'
import { getSectionUrl } from '../../lib/urls'
import IBasePost from '../../types/base-post'
import BaseLink from '../link/base-link'

interface IProps {
  post: IBasePost
  className?: string
}

const PostSectionLink = ({ post, className }: IProps) => (
  <h3>
    <BaseLink
      href={getSectionUrl(post.fields.section)}
      aria={`Read more ${post.fields.section}`}
      className={cn(
        'text-base md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-red-500',
        className
      )}
    >
      {post.fields.section}
    </BaseLink>
  </h3>
)

export default PostSectionLink
