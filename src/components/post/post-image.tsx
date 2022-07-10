import cn from '../../lib/class-names'
import IBasePost from '../../types/base-post'
import BaseLink from '../link/base-link'
import BasePostImage from './base-post-image'

interface IProps {
  post: IBasePost
  size?: [number, number]
  sizes?: number[]
  hover?: boolean
  className?: string
}

const PostImage = ({
  post,
  size = [640, 360],
  sizes = [320, 480, 640, 1280],
  hover = false,
  className,
}: IProps) => {
  const image = (
    <div
      className={cn('relative overflow-hidden rounded-lg w-full', className)}
    >
      <BasePostImage
        post={post}
        size={size}
        sizes={sizes}
        className={cn('absolute', [
          hover,
          'brightness-80',
          'hover:scale-102 transition-transform duration-300',
        ])}
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
