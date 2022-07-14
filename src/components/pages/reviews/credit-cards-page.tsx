import StarRating from '../../../components/star-rating'
import allcards from '../../../../content/reviews/credit-cards.json'
import VCenterRow from '../../../components/v-center-row'
import BaseCol from '../../../components/base-col'
import ReviewExpandDiv from '../../../components/reviews/review-expand-div'
import ThumbsUpIcon from '../../../components/icons/thumbs-up'
import ThumbsDownIcon from '../../../components/icons/thumbs-down'
import BlueIndexLink from '../../../components/link/blue-index-link'

const CreditCardsPage = () => (
  <ul className="flex flex-col flex-nowrap gap-y-16">
    {allcards.map(
      (
        cardgroup: {
          name: string
          description: string
          cards: {
            name: string
            description: string
            rating: number
            fee: string
            url: string
            pros: string[]
            cons: string[]
          }[]
        },
        cardGroupIndex: number
      ) => {
        return (
          <li key={cardGroupIndex}>
            <h2 className="uppercase font-light text-xl tracking-wide mb-4">
              {cardgroup.name}
            </h2>

            <ul className="flex flex-col flex-nowrap gap-y-8">
              {cardgroup.cards.map(
                (
                  card: {
                    name: string
                    description: string
                    rating: number
                    fee: string
                    url: string
                    pros: string[]
                    cons: string[]
                  },
                  cardIndex: number
                ) => {
                  return (
                    <li key={cardIndex}>
                      <ReviewExpandDiv title={card.name}>
                        <>
                          <p className="mt-4">{card.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-8">
                            <BaseCol className="items-center md:items-start mb-8">
                              <StarRating rating={card.rating} />

                              <h4 className="mt-4">Annual fee: {card.fee}</h4>
                              <BlueIndexLink
                                href={card.url}
                                aria={`Visit ${card.name} site`}
                                className="mt-4"
                              >
                                Visit website
                              </BlueIndexLink>
                            </BaseCol>
                            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
                              <div className="text-emerald-400 fill-emerald-400">
                                <VCenterRow center={true} className="pb-2">
                                  <h4 className="mr-2">Pros</h4>
                                  <ThumbsUpIcon className="w-4" />
                                </VCenterRow>
                                <ul className="list-outside list-disc ml-2 p-2">
                                  {card.pros.map(
                                    (pro: string, index: number) => {
                                      return <li key={index}>{pro}</li>
                                    }
                                  )}
                                </ul>
                              </div>
                              <div className="text-rose-400 fill-rose-400">
                                <VCenterRow center={true} className=" pb-2">
                                  <h4 className="mr-2">Cons</h4>
                                  <ThumbsDownIcon className="w-4" />
                                </VCenterRow>

                                <ul className="list-outside list-disc ml-2 p-2">
                                  {card.cons.map(
                                    (con: string, index: number) => {
                                      return <li key={index}>{con}</li>
                                    }
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </>
                      </ReviewExpandDiv>
                    </li>
                  )
                }
              )}
            </ul>
          </li>
        )
      }
    )}
  </ul>
)

export default CreditCardsPage
