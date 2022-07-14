import IPostFields from './post-fields'

export default interface IBasePost {
  index: number
  slug: string
  //url: string

  date: string
  fields: IPostFields
}
