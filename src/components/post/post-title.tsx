import IChildrenProps from '../../types/children-props'

const PostTitle = ({ children }: IChildrenProps) => (
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-12">
    {children}
  </h1>
)

export default PostTitle
