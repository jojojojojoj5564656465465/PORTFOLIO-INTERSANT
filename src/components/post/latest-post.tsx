import IPreviewPost from '../../types/preview-post'
import PostPreview from './post-preview'

interface IProps {
  post: IPreviewPost
}

const LatestPost = ({ post }: IProps) => (
  <PostPreview post={post} showImage={false} headerClassName="text-3xl" />
)

export default LatestPost
