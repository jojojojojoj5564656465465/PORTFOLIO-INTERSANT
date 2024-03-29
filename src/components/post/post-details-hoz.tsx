import cn from '../../lib/class-names'
import IClassProps from '../../types/class-props'
import IPreviewPost from '../../types/preview-post'
import Avatar from '../avatar'
import DateFormatter from './date-formatter'
import VCenterRow from '../v-center-row'

interface IProps extends IClassProps {
  post: IPreviewPost
}

// const PostDetails = ({ post }: IProps) => (
//   <>
//     <Avatar author={post.authors[0]} showTitle={true} />
//     <div className="mt-8 pt-8 border-t border-solid border-gray-200 grid grid-cols-3 gap-4 text-gray-500 tracking-wide text-sm">
//       <div className="uppercase tracking-wide text-sm">Published</div>
//       <div className="col-span-2">
//         <DateFormatter dateString={post.date} />
//       </div>
//       <div className="uppercase tracking-wide text-sm">Tags</div>
//       <div className="col-span-2">
//         <PostTags post={post} />
//       </div>
//     </div>
//     <div className="mt-4 pt-8 border-t border-solid border-gray-200 grid grid-cols-3 gap-4 text-gray-500">
//       <div className="uppercase tracking-wide text-sm">Share</div>
//       <div className="col-span-2">
//         <PostSocialMedia post={post} />
//       </div>
//     </div>
//   </>
// )

const PostDetailsHoz = ({ post, className }: IProps) => (
  <section
    className={cn(
      'flex flex-row justify-between items-center border-b-2 pb-4 border-gray-200',
      className
    )}
  >
    <Avatar author={post.authors[0]} showTitle={true} />

    <DateFormatter date={post.date} />

    {/* <PostTags post={post} /> */}

    {/* <PostSocialMedia post={post} /> */}
  </section>
)

export default PostDetailsHoz
