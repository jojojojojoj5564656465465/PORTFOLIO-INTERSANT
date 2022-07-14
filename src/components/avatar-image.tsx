import cn from '../lib/class-names'
import { getUrlFriendlyTag } from '../lib/tags'
import IClassProps from '../types/class-props'
import IPostAuthor from '../types/post-author'
import BaseImage from './base-image'

export interface IAvatarProps extends IClassProps {
  author: IPostAuthor
}

interface IProps extends IAvatarProps {
  src?: string
  size?: [number, number]
  sizes?: number[]
  root?: string
}

const AvatarImage = ({
  author,
  src,
  size = [160, 160],
  sizes = [160, 240],
  root = '/authors',
  className,
}: IProps) => {
  if (src === undefined) {
    src = getUrlFriendlyTag(author.fields.name)
  }

  return (
    <BaseImage
      src={src}
      alt={`Picture of ${author.fields.name}`}
      size={size}
      sizes={sizes}
      root={root}
      className={cn('rounded-full', className)}
    />
  )
}

export default AvatarImage
