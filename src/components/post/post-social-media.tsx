import { getPostUrl } from '../../lib/articles'
import cn from '../../lib/class-names'
import IPost from '../../types/post'
import FacebookIcon from '../icons/facebook'
import LinkedInIcon from '../icons/linkedin'
import TwitterIcon from '../icons/twitter'
import BaseLink from '../link/base-link'

export const CLS_TEXT_GRAY_HOVER = 'w-6'

export const CLS_SOCIAL_ICON =
  'fill-gray-300 hover:fill-blue-400 animate-button border border-gray-200 rounded-full p-2 mr-2'

interface IProps {
  post: IPost
  className?: string
}

const PostSocialMedia = ({ post, className }: IProps) => {
  const url = getPostUrl(post.slug)
  return (
    <section className={cn('flex flex-row items-center', className)}>
      <BaseLink
        aria="Post article to Twitter"
        href={`https://twitter.com/intent/tweet?text=${post.fields.title}&url=${url}`}
        className={CLS_SOCIAL_ICON}
      >
        <TwitterIcon className={CLS_TEXT_GRAY_HOVER} />
      </BaseLink>

      <BaseLink
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        aria="Post article to Facebook"
        className={CLS_SOCIAL_ICON}
      >
        <FacebookIcon className={CLS_TEXT_GRAY_HOVER} />
      </BaseLink>

      <BaseLink
        href={`https://www.linkedin.com/shareArticle?url=${url}`}
        aria="Post article to LinkedIn"
        className={CLS_SOCIAL_ICON}
      >
        <LinkedInIcon className={CLS_TEXT_GRAY_HOVER} />
      </BaseLink>
    </section>
  )
}

export default PostSocialMedia
