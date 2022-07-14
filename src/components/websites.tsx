import websites from '../../content/reviews/websites.json'
import H2 from './h2'
import BlueLink from './link/blue-link'

const Websites = () => (
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
          <div className="mb-16">
            <H2 className="mb-4">{div.name}</H2>

            <ul>
              {div.links.map(
                (
                  link: { name: string; description: string; url: string },
                  linkIndex: number
                ) => {
                  return (
                    <li className="mb-4">
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

export default Websites
