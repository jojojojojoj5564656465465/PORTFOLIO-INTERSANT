import FOOTER_LINKS from '../../content/menus/footer.json'
import INFO_LINKS from '../../content/menus/info.json'
import REVIEW_LINKS from '../../content/menus/reviews.json'
import ArticleDiv from './article-div'
import UnderlineLink from './link/underline-link'
import getCopyright from '../lib/copyright'
import LogoDark from './logo-dark'
import BaseLink from './link/base-link'
import VCenterRow from './v-center-row'

const Footer = () => (
  <footer className="text-sm text-gray-300 bg-gray-900">
    <ArticleDiv className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <BaseLink href="/" aria="Goto Homepage">
            <LogoDark className="w-56" />
          </BaseLink>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {FOOTER_LINKS.map(
            (
              linkGroup: {
                title: string
                links: { name: string; url: string }[]
              },
              linkGroupIndex: number
            ) => {
              return (
                <div key={linkGroupIndex}>
                  <h2 className="font-semibold mb-4">{linkGroup.title}</h2>
                  <ul className="flex flex-col flex-nowrap gap-2">
                    {linkGroup.links.map(
                      (
                        link: { name: string; url: string },
                        linkIndex: number
                      ) => {
                        return (
                          <li key={linkIndex}>
                            <UnderlineLink
                              href={link.url}
                              aria={`View ${link.name}`}
                            >
                              {link.name}
                            </UnderlineLink>
                          </li>
                        )
                      }
                    )}
                  </ul>
                </div>
              )
            }
          )}

          <div>
            <h2 className="font-semibold mb-4">
              <UnderlineLink href="/reviews" aria="Read all reviews">
                Reviews
              </UnderlineLink>
            </h2>
            <ul className="flex flex-col flex-nowrap gap-2">
              {REVIEW_LINKS.map(
                (link: { name: string; url: string }, linkIndex: number) => {
                  return (
                    <li key={linkIndex}>
                      <UnderlineLink href={link.url} aria={`View ${link.name}`}>
                        {link.name}
                      </UnderlineLink>
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        </div>
      </div>

      <VCenterRow tag="ul" className="text-xs gap-x-4 mt-16">
        <li>{getCopyright()}</li>
        {INFO_LINKS.map(
          (link: { name: string; url: string }, index: number) => (
            <li key={index}>
              <UnderlineLink href={link.url} aria={`View ${link.name}`}>
                {link.name}
              </UnderlineLink>
            </li>
          )
        )}
      </VCenterRow>
    </ArticleDiv>
  </footer>
)

export default Footer
