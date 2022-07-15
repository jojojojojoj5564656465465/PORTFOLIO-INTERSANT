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
  showDescription?: boolean
  showAvatar?: boolean
}

const HeroPostSmall = ({
  post,
  showDescription = true,
  showAvatar = true,
  className,
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
      className={cn('grid grid-cols-1 md:grid-cols-3 md:gap-6', className)}
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
    >
      <div className="col-span-1">
        <PostImage post={post} className="h-48 lg:h-32 mb-4" />
      </div>

      <div className="col-span-2">
        <PostSectionLink post={post} />
        <PostTitleLink post={post} className="text-3xl" />

        {showDescription && (
          <HTML html={post.excerpt} className="text-gray-600 mt-2" />
        )}

        <PostAuthor post={post} showAvatar={showAvatar} className="mt-3" />
      </div>
    </article>
  )
}

export default HeroPostSmall
