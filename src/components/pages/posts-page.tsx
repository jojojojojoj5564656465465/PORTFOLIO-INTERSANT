import IPreviewPost from '../../types/preview-post'
import ISectionMap from '../../types/section-map'
import BaseCol from '../base-col'
import Pagination from '../pagination'
import HeadPosts from '../post/head-posts'
import HeroPosts from '../post/hero-posts'
import LatestPosts from '../post/latest-posts'
import SectionPosts from '../post/section-posts'
import SectionPostsVert from '../post/section-posts-vert'

interface IProps {
  posts: IPreviewPost[]
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
  sectionMap,
  root = '/blog',
}: IProps) => {
  const headPosts = posts.slice(0, 4)
  const morePosts = posts.slice(4)

  return (
    <BaseCol className="gap-y-16">
      <HeroPosts posts={headPosts} />

      {/* <HeadPost post={heroPost} /> */}
      <HeadPosts posts={morePosts} />
      {/* <HeroPost post={heroPost} /> */}
      {/* <MorePosts posts={morePosts} /> */}

      {/* <Pagination page={page} pages={pages} /> */}
      {pages > 1 && <Pagination page={page} pages={pages} root={root} />}

      {showLatestPosts && <LatestPosts posts={posts} />}

      {sectionMap && (
        <>
          <SectionPostsVert
            section="Guides & Tutorials"
            posts={sectionMap['Guides & Tutorials']}
          />
          <SectionPosts section="Opinions" posts={sectionMap['Opinions']} />

          <SectionPostsVert
            section="Retirement"
            posts={sectionMap['Retirement']}
          />

          <SectionPosts
            section="News & Announcements"
            posts={sectionMap['News & Announcements']}
          />
        </>
      )}
    </BaseCol>
  )
}

// "Guides & Tutorials",
//   "Opinions",
//   "Retirement",
//   "News & Announcements",
//ightMode={index % 2 === 0}
//key={index}

export default PostsPage
