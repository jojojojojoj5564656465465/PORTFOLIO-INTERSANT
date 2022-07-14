import cn from '../../lib/class-names'
import IPreviewPost from '../../types/preview-post'
import BaseCol from '../base-col'
import PostPreview from './post-preview'

interface IProps {
  posts: IPreviewPost[]
  rightMode?: boolean
}

const BaseSectionPostsVert = ({ posts, rightMode = true }: IProps) => {
  const topPost = posts[0]
  const topPosts = posts.slice(1, 3)
  const otherPosts = posts.slice(3)

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {!rightMode && <PostPreview post={topPost} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rightMode && topPosts.length && (
          <BaseCol className="gap-y-8">
            {topPosts.map((post, index) => {
              return (
                <PostPreview
                  post={post}
                  className={cn([index > 0, 'border-t border-gray-200 pt-8'])}
                  headerClassName="text-3xl"
                  imageClassName="h-64 md:h-48"
                  showImage={true}
                  key={index}
                />
              )
            })}
          </BaseCol>
        )}

        {otherPosts.length > 0 && (
          <BaseCol className="gap-y-8">
            {otherPosts.map((post, index) => {
              return (
                <PostPreview
                  post={post}
                  className={cn([index > 0, 'border-t border-gray-200 pt-8'])}
                  headerClassName="text-3xl"
                  showImage={false}
                  key={index}
                />
              )
            })}
          </BaseCol>
        )}

        {!rightMode && topPosts.length && (
          <BaseCol className="gap-y-8">
            {topPosts.map((post, index) => {
              return (
                <PostPreview
                  post={post}
                  className={cn([index > 0, 'border-t border-gray-200 pt-8'])}
                  headerClassName="text-3xl"
                  imageClassName="h-48"
                  showImage={true}
                  key={index}
                />
              )
            })}
          </BaseCol>
        )}
      </div>

      {rightMode && <PostPreview post={topPost} />}
    </section>
  )
}

export default BaseSectionPostsVert
