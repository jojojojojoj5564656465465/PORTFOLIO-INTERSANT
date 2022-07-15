import IPost from '../../types/post'
import PageTitle from '../page-title'
import PostSectionLink from './post-section-link'
import HeroImageCaption from './hero-image-caption'
import HeroImage from './hero-image'
import ArticleDiv from '../article-div'
import IBasePost from '../../types/base-post'

interface IProps {
  post: IBasePost
}

const PostHeader = ({ post }: IProps) => (
  <section className="bg-gray-800">
    <ArticleDiv className="pt-8 lg:pt-16">
      <div className="w-full md:w-6/10">
        {post.fields.section && <PostSectionLink post={post} />}
        <PageTitle
          title={post.fields.title}
          subtitle={post.fields.description}
          className="mt-3 text-gray-50"
        />
      </div>
      {/* <PostDetails post={post} className="block lg:hidden mb-8" /> */}

      <div className="lg:pt-8 -mb-32">
        <HeroImage post={post} />
        {post.fields.heroCaption && <HeroImageCaption post={post} />}
      </div>
    </ArticleDiv>
  </section>
)

export default PostHeader
