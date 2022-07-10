import cn from '../../lib/class-names'
import IPost from '../../types/post'
import WrapRow from '../wrap-row'
import PostTagLink from './post-tag-link'

interface IProps {
  post: IPost
  className?: string
}

const PostTags = ({ post, className }: IProps) => (
  <section
    className={cn(
      'flex flex-row items-center text-xs tracking-wide uppercase',
      className
    )}
  >
    <div className="mr-4">Tags:</div>
    {post.fields.tags
      .sort()
      .map(tag => tag.trim().toUpperCase())
      .map((tag: string, index: number) => {
        return <PostTagLink tag={tag} key={index} />
      })}
  </section>
)

export default PostTags
