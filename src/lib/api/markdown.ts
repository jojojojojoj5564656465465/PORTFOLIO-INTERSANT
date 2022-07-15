import fs from 'fs'
import matter from 'gray-matter'
import IPostFields from '../../types/post-fields'
import { getTags } from '../tags'

export const getFields = (path: string, fields: string[] = []): IPostFields => {
  const fileContents = fs.readFileSync(path, 'utf8')
  const { data, content, excerpt } = matter(fileContents, {
    excerpt: true,
    excerpt_separator: '<!-- end -->',
  })

  const items: IPostFields = {
    title: '',
    description: '',
    content: content,
    excerpt: excerpt,
    hero: '',
    author: '',
    section: '',
    related: '',
    status: 'draft',
    tags: [],
  }

  for (const [key, value] of Object.entries(data)) {
    switch (key) {
      case 'tags':
        items[key] = getTags(value)
        break
      default:
        items[key] = value
        break
    }
  }

  // Ensure only the minimal needed data is exposed
  // fields.forEach(field => {
  //   //if (field === 'slug') {
  //   //  items[field] = realPath //realSlug
  //   //}

  //   if (field === 'content') {
  //     items[field] = content
  //   }

  //   if (field === 'excerpt') {
  //     items[field] = excerpt
  //   }

  //   if (typeof data[field] !== 'undefined') {
  //     items[field] = data[field]
  //   }
  // })

  return items
}
