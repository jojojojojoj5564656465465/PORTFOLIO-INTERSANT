import cn from '../../lib/class-names'
import IBasePost from '../../types/base-post'
import IClassProps from '../../types/class-props'
import ToBlueLink from '../link/to-blue-link'

interface IProps extends IClassProps {
  post: IBasePost
}

const PostTitleLink = ({ post, className }: IProps) => (
  <h2 className={cn('font-bold', className)}>
    <ToBlueLink href={post.slug} aria={post.fields.title} underline={true}>
      {post.fields.title}
    </ToBlueLink>
  </h2>
)

export default PostTitleLink
