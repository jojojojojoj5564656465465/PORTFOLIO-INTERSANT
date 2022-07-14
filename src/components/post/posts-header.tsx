import IChildrenProps from '../../types/children-props'

const PostsHeader = ({ children }: IChildrenProps) => {
  return (
    <h2 className="text-lg font-bold border-t-gray-700 border-t-4 border-b-gray-300 border-b py-2 mb-8">
      {children}
    </h2>
  )
}

export default PostsHeader
