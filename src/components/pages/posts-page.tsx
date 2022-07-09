import { SECTIONS } from '../../constants'
import IPreviewPost from '../../types/preview-post'
import ISectionMap from '../../types/section-map'
import ApplePagination from '../apple-pagination'
import Pagination from '../pagination'
import HeadPosts from '../post/head-posts'
import HeroPosts from '../post/hero-posts'
import LatestPosts from '../post/latest-posts'
import SectionPosts from '../post/section-posts'

interface IProps {
  posts: any[]
  page: number
  pages: number
  showLatestPosts?: boolean
  sectionMap?: ISectionMap
  root?: string
}

const PostsPage = ({
  posts,
  page,
  pages,
  showLatestPosts = false,
  sectionMap = null,
  root = '/blog',
}: IProps) => {
  const headPosts = posts.slice(0, 4)
  const morePosts = posts.slice(4)

  return (
    <>
      <HeroPosts posts={headPosts} />

      <HeadPosts posts={morePosts} />

      {pages > 1 && <Pagination page={page} pages={pages} root={root} />}

      {showLatestPosts && <LatestPosts posts={posts} />}

      {sectionMap &&
        SECTIONS.map((section: string, index: number) => (
          <SectionPosts
            section={section}
            posts={sectionMap[section]}
            rightMode={index % 2 === 0}
            key={index}
          />
        ))}
    </>
  )
}

export default PostsPage
