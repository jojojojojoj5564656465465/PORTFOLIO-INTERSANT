import { useState } from 'react'
import cn from '../../lib/class-names'
import IClassProps from '../../types/class-props'
import IPreviewPost from '../../types/preview-post'
import HTML from '../html'
import PostAuthor from './post-author'
import PostImage from './post-image'
import PostSectionLink from './post-section-link'
import PostTitleLink from './post-title-link'

interface IProps extends IClassProps {
  post: IPreviewPost
  imageClassName?: string
  headerClassName?: string
  innerClassName?: string
  contentClassName?: string
  showDescription?: boolean
  showImage?: boolean
  showAvatar?: boolean
  lazy?: boolean
}

const PostPreview = ({
  post,
  className,
  imageClassName = 'h-64 md:h-72',
  headerClassName = 'text-4xl lg:text-5xl',
  innerClassName,
  contentClassName = 'text-base',
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
        <PostTitleLink post={post} className={cn('mt-1', headerClassName)} />

        {showDescription && (
          <HTML
            html={post.excerpt}
            className={cn('text-gray-600 mt-2', contentClassName)}
          />
        )}

        <PostAuthor post={post} showAvatar={showAvatar} className="mt-3" />
      </div>
    </article>
  )
}

export default PostPreview
