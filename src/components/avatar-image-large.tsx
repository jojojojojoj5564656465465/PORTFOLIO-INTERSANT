import AvatarImage, { IAvatarProps } from './avatar-image'

const AvatarImageLarge = ({ author, className }: IAvatarProps) => (
  <AvatarImage
    author={author}
    size={[240, 240]}
    sizes={[240, 480]}
    className={className}
  />
)

export default AvatarImageLarge
