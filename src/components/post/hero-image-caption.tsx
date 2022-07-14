import cn from '../../lib/class-names'
import IClassProps from '../../types/class-props'
import IPost from '../../types/post'

interface IProps extends IClassProps {
  post: IPost
}

const HeroImageCaption = ({ post, className }: IProps) => (
  <p className={cn('text-sm text-center mt-2 text-gray-500', className)}>
    {post.fields.heroCaption}
  </p>
)

export default HeroImageCaption
