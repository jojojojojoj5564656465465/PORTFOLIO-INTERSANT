import IPostsProps from '../../types/posts-props'
import RelatedPost from './related-post'

interface IProps extends IPostsProps {
  title?: string
}

const RelatedPosts = ({ posts, title = 'Related Posts' }: IProps) => (
  <section>
    <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
      {posts.slice(0, 3).map((post, index) => (
        <li key={index}>
          <RelatedPost post={post} />
        </li>
      ))}
    </ul>
  </section>
)

export default RelatedPosts
