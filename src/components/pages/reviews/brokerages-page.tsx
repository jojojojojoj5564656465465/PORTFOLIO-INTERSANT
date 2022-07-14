import StarRating from '../../../components/star-rating'
import allBrokerages from '../../../../content/reviews/brokerages.json'
import VCenterRow from '../../../components/v-center-row'
import BaseCol from '../../../components/base-col'
import ReviewExpandDiv from '../../../components/reviews/review-expand-div'
import ThumbsUpIcon from '../../../components/icons/thumbs-up'
import ThumbsDownIcon from '../../../components/icons/thumbs-down'
import BlueIndexLink from '../../../components/link/blue-index-link'

const BrokeragesPage = () => (
  <ul className="flex flex-col flex-nowrap gap-y-8">
    {allBrokerages.map((brokerage, brokerageIndex) => {
      return (
        <li key={brokerageIndex}>
          <ReviewExpandDiv title={brokerage.name}>
            <>
              <p className="mt-4">{brokerage.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 mt-8">
                <BaseCol className="items-center md:items-start mb-8">
                  <StarRating rating={brokerage.rating} />
                  <BlueIndexLink
                    href={brokerage.url}
                    aria={`Visit ${brokerage.name} site`}
                    className="mt-4"
                  >
                    Visit website
                  </BlueIndexLink>
                </BaseCol>
                <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-8">
                  <div className="text-emerald-400 fill-emerald-400">
                    <VCenterRow center={true} className="pb-2 gap-x-2">
                      <h4>Pros</h4>
                      <ThumbsUpIcon className="w-4" />
                    </VCenterRow>
                    <ul className="list-outside list-disc ml-2 p-2">
                      {brokerage.pros.map((pro: string, index: number) => {
                        return <li key={index}>{pro}</li>
                      })}
                    </ul>
                  </div>
                  <div className="text-rose-400 fill-rose-400">
                    <VCenterRow center={true} className="gap-x-2">
                      <h4>Cons</h4>
                      <ThumbsDownIcon className="w-4" />
                    </VCenterRow>

                    <ul className="list-outside list-disc ml-2 p-2">
                      {brokerage.cons.map((con: string, index: number) => {
                        return <li key={index}>{con}</li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          </ReviewExpandDiv>
        </li>
      )
    })}
  </ul>
)

export default BrokeragesPage
