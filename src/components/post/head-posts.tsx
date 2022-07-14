import IPreviewPost from '../../types/preview-post'
import BaseHeadPosts from './base-head-posts'

interface IProps {
  posts: IPreviewPost[]
  showAvatar?: boolean
}

const HeadPosts = ({ posts, showAvatar = true }: IProps) => (
  <section>
    <BaseHeadPosts posts={posts} showAvatar={showAvatar} />
  </section>
)

export default HeadPosts
