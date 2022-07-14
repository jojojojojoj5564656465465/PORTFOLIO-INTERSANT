interface IBasePost {
  slug: string
  //url: string
  index: number
  date: string
  fields: {
    title: string
    description: string
    hero: string
    heroCaption?: string
    author: string
    content: string
    excerpt: string
    section: string
    related: string
    status?: string
    tags: string[]
  }
}

export default IBasePost
