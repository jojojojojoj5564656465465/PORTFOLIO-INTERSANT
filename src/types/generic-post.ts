import IFieldMap from './field-map'

export default interface IGenericPost {
  slug: string
  url: string
  index: number
  date: string
  fields: IFieldMap
}
