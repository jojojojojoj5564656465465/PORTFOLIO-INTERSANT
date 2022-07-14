import React from 'react'
import { getTagBaseUrl } from '../../lib/urls'
import BlueLink from '../link/blue-link'

interface IProps {
  tag: string
}

const PostTagLinkBlue = ({ tag }: IProps) => (
  <BlueLink
    href={getTagBaseUrl(tag)}
    aria={`View all articles related to ${tag}`}
    className="font-bold"
  >
    {tag}
  </BlueLink>
)

export default PostTagLinkBlue
