import cn from '../../lib/class-names'
import IBasePost from '../../types/base-post'
import BaseLink from '../link/base-link'
import BasePostImage from './base-post-image'

interface IProps {
  post: IBasePost
  size?: number[]
  sizes?: number[]
  lazy?: boolean
  className?: string
}

const PostImage = ({
  post,
  size = [640, 360],
  sizes = [320, 480, 640, 800, 960, 1280],
  lazy = true,
  className,
}: IProps) => {
  const image = (
    <div className={cn('relative overflow-hidden rounded-lg', className)}>
      <BasePostImage
        post={post}
        size={size}
        sizes={sizes}
        lazy={lazy}
        className="absolute transition-transform duration-300 hover:scale-104"
      />
    </div>
  )

  if (post.slug) {
    return (
      <BaseLink href={post.slug} aria={post.fields.title}>
        {image}
      </BaseLink>
    )
  } else {
    return image
  }
}

export default PostImage
