import IBasePost from './base-post'
import IPostAuthor from './post-author'

export default interface IPreviewPost extends IBasePost {
  excerpt: string
  authors: IPostAuthor[]
}
