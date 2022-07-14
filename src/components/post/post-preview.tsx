import Avatar from '../avatar'
import DateFormatter from '../date-formatter'
import PostImage from './post-image'
import IPreviewPost from '../../types/preview-post'
import cn from '../../lib/class-names'
import PostSectionLink from './post-section-link'
import { useState } from 'react'
import HTML from '../html'
import PostTitleLink from './post-title-link'
import IClassProps from '../../types/class-props'

interface IProps extends IClassProps {
  post: IPreviewPost
  imageClassName?: string
  headerClassName?: string
  innerClassName?: string
  showDescription?: boolean
  showImage?: boolean
  showAvatar?: boolean
  lazy?: boolean
}

const PostPreview = ({
  post,
  className,
  imageClassName = 'h-64 lg:h-72',
  headerClassName = 'text-4xl lg:text-5xl',
  innerClassName,
  showDescription = true,
  showImage = true,
  showAvatar = true,
  lazy = false,
}: IProps) => {
  const [hover, setHover] = useState(false)

  const _handleMouseEnter = () => {
    setHover(true)
  }

  const _handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <article
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
      className={cn('overflow-hidden', className)}
    >
      {showImage && (
        <PostImage
          post={post}
          lazy={lazy}
          className={cn('mb-4', imageClassName)}
        />
      )}

      <div className={innerClassName}>
        <PostSectionLink post={post} />
        <PostTitleLink post={post} className={headerClassName} />

        {showDescription && (
          <HTML html={post.excerpt} className="text-gray-500 mt-4" />
        )}

        {showAvatar && (
          <Avatar author={post.authors[0]} isSmall={true} className="mt-3" />
        )}

        <DateFormatter date={post.date} className="mt-3" />

        {/* <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p> */}
      </div>
    </article>
  )
}

export default PostPreview
