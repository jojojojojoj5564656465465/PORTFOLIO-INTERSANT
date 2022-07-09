import StarRating from '../star-rating'
import allcards from '../../../_content/reviews/credit-cards.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import VCenterRow from '../v-center-row'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import BaseCol from '../base-col'
import ReviewExpandDiv from '../reviews/review-expand-div'
import BlueIndexLink from '../link/blue-index-link'

const ICON_CLS = 'w-4 ml-2'

const CreditCardsPage = () => {
  return (
    <div>
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
            <div key={cardGroupIndex} className="mb-8">
              <h2 className="uppercase font-light text-xl tracking-wide mb-4">
                {cardgroup.name}
              </h2>

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
                    <ReviewExpandDiv title={card.name} key={cardIndex}>
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
                          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <VCenterRow
                                center={true}
                                className="text-emerald-400 pb-2"
                              >
                                <h4 className="mr-2">Pros</h4>
                                <FontAwesomeIcon
                                  icon={faThumbsUp}
                                  className={ICON_CLS}
                                />
                              </VCenterRow>
                              <ul className="list-outside list-disc ml-2 p-2">
                                {card.pros.map((pro: string, index: number) => {
                                  return <li key={index}>{pro}</li>
                                })}
                              </ul>
                            </div>
                            <div>
                              <VCenterRow
                                center={true}
                                className="text-rose-400 pb-2"
                              >
                                <h4 className="mr-2">Cons</h4>
                                <FontAwesomeIcon
                                  icon={faThumbsDown}
                                  className={ICON_CLS}
                                />
                              </VCenterRow>

                              <ul className="list-outside list-disc ml-2 p-2">
                                {card.cons.map((con: string, index: number) => {
                                  return <li key={index}>{con}</li>
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </>
                    </ReviewExpandDiv>
                  )
                }
              )}
            </div>
          )
        }
      )}
    </div>
  )
}

export default CreditCardsPage
