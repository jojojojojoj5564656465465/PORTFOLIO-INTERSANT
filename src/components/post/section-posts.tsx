import { getSectionUrl } from '../../lib/urls'
import IPostsProps from '../../types/posts-props'
import BaseLink from '../link/base-link'
import BaseSectionPosts from './base-section-posts'
import PostsHeader from './posts-header'

interface IProps extends IPostsProps {
  section: string
  rightMode?: boolean
}

const SectionPosts = ({ section, posts, rightMode = true }: IProps) => (
  <section className="mt-8">
    <PostsHeader>
      <BaseLink
        href={getSectionUrl(section)}
        aria={`View all articles on ${section}`}
      >
        {section}
      </BaseLink>
    </PostsHeader>

    <BaseSectionPosts posts={posts} rightMode={rightMode} />
  </section>
)

export default SectionPosts
