import IPostsProps from '../../types/posts-props'
import PostPreview from './post-preview'

interface IProps extends IPostsProps {
  showAvatar?: boolean
}

const HeadPosts = ({ posts, showAvatar = true }: IProps) => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {posts.map(post => (
      <PostPreview
        key={post.slug}
        post={post}
        showAvatar={showAvatar}
        className="border-t border-gray-200 pt-8"
      />
    ))}
  </section>
)

export default HeadPosts
