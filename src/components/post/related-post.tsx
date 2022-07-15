import IPreviewPost from '../../types/preview-post'
import PostPreview from './post-preview'

interface IProps {
  post: IPreviewPost
}

const RelatedPost = ({ post }: IProps) => (
  <PostPreview
    post={post}
    className="hover:shadow bg-white border border-gray-200 h-full rounded-lg animate-shadow"
    innerClassName="p-5 text-sm"
    headerClassName="text-3xl"
    showImage={false}
  />
)

export default RelatedPost
