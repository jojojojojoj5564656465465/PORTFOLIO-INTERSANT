import IPost from '../../types/post'
import PostPreview from './post-preview'

interface IProps {
  posts: IPost[]
}

const MorePosts = ({ posts }: IProps) => (
  <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mb-32">
    {posts.map(post => (
      <PostPreview key={post.slug} post={post} headerClassName="text-3xl" />
    ))}
  </section>
)

export default MorePosts
