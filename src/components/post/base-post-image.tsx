import cn from '../../lib/class-names'
import IBasePost from '../../types/base-post'
import IClassProps from '../../types/class-props'
import BaseImage from '../base-image'

interface IProps extends IClassProps {
  post: IBasePost
  root?: string
  size?: number[]
  sizes?: number[]
  lazy?: boolean
}

const BasePostImage = ({
  post,
  root = '/posts',
  size = [640, 360],
  sizes = [320, 480, 640, 800, 960, 1280],
  lazy = true,
  className,
}: IProps) => (
  <BaseImage
    src={post.fields.hero}
    alt={post.fields.title}
    root={root}
    size={size}
    sizes={sizes}
    lazy={lazy}
    className={cn('w-full h-full object-cover', className)}
  />
)

export default BasePostImage
