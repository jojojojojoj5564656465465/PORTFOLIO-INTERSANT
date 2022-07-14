import cn from '../../lib/class-names'
import IClassProps from '../../types/class-props'
import IPreviewPost from '../../types/preview-post'
import VCenterRow from '../v-center-row'
import PostTagLinkBlue from './post-tag-link-blue'

interface IProps extends IClassProps {
  post: IPreviewPost
}

const PostTags = ({ post, className }: IProps) => (
  <VCenterRow
    className={cn('text-sm  gap-4 border-t border-gray-200 pt-4', className)}
  >
    <span>Tags:</span>
    <ul className="flex flex-row flex-wrap gap-2">
      {post.fields.tags
        .sort()
        .map(tag => tag.trim())
        .map((tag: string, index: number) => {
          return (
            <li key={index}>
              <PostTagLinkBlue tag={tag} />
              {index < post.fields.tags.length - 1 && <span>,</span>}
            </li>
          )
        })}
    </ul>
  </VCenterRow>
)

export default PostTags
