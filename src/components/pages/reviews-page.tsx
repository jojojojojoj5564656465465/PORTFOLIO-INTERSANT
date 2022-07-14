import BaseLink from '../../components/link/base-link'
import VCenterRow from '../../components/v-center-row'
import ArrowRightIcon from '../../components/icons/arrow-right'

const reviewLink = (name: string, description: string, href: string) => {
  return (
    <li>
      <BaseLink
        href={`/reviews/${href}`}
        aria={`Click to read ${name} review`}
        className="flex flex-col items-center w-full h-full border border-gray-200 hover:shadow rounded-lg animate-shadow"
      >
        <div className="w-full h-full p-6">
          {/* <HCenterRow className="w-full">
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="4x"
              className="text-slate-300"
            />
          </HCenterRow> */}
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
        <VCenterRow className="justify-center p-4 text-sm uppercase font-semibold text-emerald-400 fill-emerald-400 border-t border-slate-100 gap-x-2 w-full">
          View <ArrowRightIcon className="w-4" />
        </VCenterRow>
      </BaseLink>
    </li>
  )
}

const ReviewsPage = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
      {reviewLink('Credit cards', 'How to spend your money', 'credit-cards')}
      {reviewLink('Portfolios', 'What to invest your money in', 'portfolios')}
      {reviewLink('Brokerages', 'Where to invest your money', 'brokerages')}

      {/* {reviewLink(
          "Bank Accounts",
          "Where to save your money",
          "bank-accounts"
        )}
         */}
      {/* {reviewLink("Books", "What to read about money", "books")} */}
      {reviewLink('Websites', 'Where else to learn about money', 'websites')}
    </ul>
  )
}

export default ReviewsPage
