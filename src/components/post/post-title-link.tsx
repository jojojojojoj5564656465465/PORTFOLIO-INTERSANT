import cn from '../../lib/class-names'
import IBasePost from '../../types/base-post'
import IClassProps from '../../types/class-props'
import ToBlueLink from '../link/to-blue-link'

interface IProps extends IClassProps {
  post: IBasePost
}

const PostTitleLink = ({ post, className }: IProps) => (
  <h2 className={cn('font-bold mt-1', className)}>
    <ToBlueLink href={post.slug} aria={`Read article`} underline={true}>
      {post.fields.title}
    </ToBlueLink>
  </h2>
)

export default PostTitleLink
