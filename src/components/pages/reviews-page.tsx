import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BaseLink from '../../components/link/base-link'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import VCenterRow from '../../components/v-center-row'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import HCenterRow from '../../components/h-center-row'

const reviewLink = (name: string, description: string, href: string) => {
  return (
    <li>
      <BaseLink
        href={`/reviews/${href}`}
        aria={`Click to read ${name} review`}
        className="flex flex-col items-center w-full h-full border border-gray-200 hover:shadow-md rounded-lg transition-shadow duration-300"
      >
        <div className="w-full h-full px-6 py-8">
          <HCenterRow className="w-full">
            <FontAwesomeIcon icon={faThumbsUp} className="w-16 text-gray-300" />
          </HCenterRow>
          <div className="mt-8">
            <h4 className="font-bold text-xl">{name}</h4>

            <p className="font-light">{description}</p>

            {/* <BaseLink
            href={to}
            
          >
            View
          </BaseLink> */}
          </div>
        </div>
        <VCenterRow className="justify-center p-4 text-sm uppercase font-semibold text-emerald-400 border-t border-gray-100 w-full">
          View <FontAwesomeIcon icon={faArrowRight} className="w-4 ml-2" />
        </VCenterRow>
      </BaseLink>
    </li>
  )
}

const ReviewsPage = () => {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {reviewLink('Portfolios', 'What to invest your money in', 'portfolios')}
        {reviewLink('Credit cards', 'How to spend your money', 'credit-cards')}
        {reviewLink('Brokerages', 'Where to invest your money', 'brokerages')}

        {/* {reviewLink(
          'Bank Accounts',
          'Where to save your money',
          'bank-accounts'
        )} */}

        {/* {reviewLink('Books', 'What to read about money', 'books')} */}
        {reviewLink('Websites', 'Where else to learn about money', 'websites')}
      </ul>
    </>
  )
}

export default ReviewsPage
