import IPreviewPost from '../../types/preview-post'
import BaseHeroPosts from './base-hero-posts'

interface IProps {
  posts: IPreviewPost[]
}

const HeroPosts = ({ posts }: IProps) => (
  <section>
    <BaseHeroPosts posts={posts} />
  </section>
)

export default HeroPosts
