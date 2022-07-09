import React from 'react'
import H2 from '../../components/h2'
import ArticleLayout from '../../layouts/article-layout'
import BlueLink from '../../components/link/blue-link'
import PageTitle from '../../components/page-title'
import websites from '../../../_content/reviews/websites.json'
import TwoThirdsColLayout from '../../layouts/two-thirds-col-layout'

const renderWebsites = () => (
  <>
    {websites.map(
      (
        div: {
          name: string
          links: { name: string; description: string; url: string }[]
        },
        index: number
      ) => {
        return (
          <div key={index} className="mb-16">
            <H2 className="mb-4">{div.name}</H2>

            <ul>
              {div.links.map(
                (
                  link: { name: string; description: string; url: string },
                  linkIndex: number
                ) => {
                  return (
                    <li key={linkIndex} className="mb-4">
                      <BlueLink
                        href={link.url}
                        aria={`Visit ${link.name} site`}
                        className="font-semibold"
                      >
                        {link.name}
                      </BlueLink>
                      <p>{link.description}</p>
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        )
      }
    )}
  </>
)

const Page = () => {
  return (
    <ArticleLayout
      title="Web Sites"
      description="Interesting financial web sites."
    >
      <PageTitle
        title="Websites"
        subtitle="My favorite financial websites from the good guys"
      />
      <TwoThirdsColLayout>
        <>{renderWebsites()}</>
        <></>
      </TwoThirdsColLayout>
    </ArticleLayout>
  )
}

export default Page
