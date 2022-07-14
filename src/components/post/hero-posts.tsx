import cn from '../../lib/class-names'
import IPreviewPost from '../../types/preview-post'
import BaseCol from '../base-col'
import HeroPostSmall from './hero-post-small'
import PostPreview from './post-preview'

interface IProps {
  posts: IPreviewPost[]
}

const HeroPosts = ({ posts }: IProps) => {
  const topPost = posts[0]
  const topPosts = posts.slice(1, 4)

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <PostPreview post={topPost} className="col-span-1" />

      <BaseCol className="col-span-1 gap-y-8">
        {topPosts.map((post, index) => {
          return (
            <HeroPostSmall
              post={post}
              className={cn([index > 0, 'border-t border-gray-200 pt-8'])}
              key={index}
            />
          )
        })}
      </BaseCol>
    </section>
  )
}

export default HeroPosts
