import cn from '../../lib/class-names'
import IClassProps from '../../types/class-props'
import IPost from '../../types/post'
import BasePostImage from './base-post-image'

interface IProps extends IClassProps {
  post: IPost
  size?: number[]
  sizes?: number[]
}

const HeroImage = ({
  post,
  size = [1600, 900],
  sizes = [480, 640, 1280, 1600],
  className,
}: IProps) => (
  <BasePostImage
    post={post}
    size={size}
    sizes={sizes}
    className={cn('rounded-lg', className)}
  />
)

export default HeroImage
