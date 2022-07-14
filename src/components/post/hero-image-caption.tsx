import cn from '../../lib/class-names'
import IBasePost from '../../types/base-post'
import IClassProps from '../../types/class-props'

interface IProps extends IClassProps {
  post: IBasePost
}

const HeroImageCaption = ({ post, className }: IProps) => (
  <p className={cn('text-sm text-center mt-2 text-gray-500', className)}>
    {post.fields.heroCaption}
  </p>
)

export default HeroImageCaption
