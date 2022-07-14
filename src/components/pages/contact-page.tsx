import BlueLink from '../link/blue-link'
import ReviewExpandDiv from '../reviews/review-expand-div'

const ContactPage = () => (
  <>
    <ReviewExpandDiv title="Want to contact the Polite Investor?">
      <p className="mt-4">
        To contact me directly, email{' '}
        <BlueLink href="mailto:hello@politeinvestor.com" aria="Email me">
          hello@politeinvestor.com
        </BlueLink>
      </p>
    </ReviewExpandDiv>

    <ReviewExpandDiv title="Media" className="mt-8">
      <ul className="mt-4">
        <li>
          For ad sales and media / partnership inquiries, please email{' '}
          <BlueLink
            href="mailto:ads@politeinvestor.com"
            aria="Email ads for help"
          >
            ads@politeinvestor.com
          </BlueLink>
        </li>
        <li>
          For press and media inquiries please email{' '}
          <BlueLink
            href="mailto:press@politeinvestor.com"
            aria="Email press for help"
          >
            press@politeinvestor.com
          </BlueLink>
        </li>
      </ul>
    </ReviewExpandDiv>

    <ReviewExpandDiv title="Support" className="mt-8">
      <ul className="mt-4">
        <li>
          For issues with the site please email{' '}
          <BlueLink
            href="mailto:admin@politeinvestor.com"
            aria="Email admin for help"
          >
            admin@politeinvestor.com
          </BlueLink>
        </li>
      </ul>
    </ReviewExpandDiv>
  </>
)

export default ContactPage
