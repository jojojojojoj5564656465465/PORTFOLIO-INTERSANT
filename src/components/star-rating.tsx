import StarIcon from './icons/star'
import HalfStarIcon from './icons/half-star'

interface IProps {
  rating: number
}

const StarRating = ({ rating }: IProps) => {
  const n = Math.floor(rating)

  const stars = []

  for (let i = 0; i < n; ++i) {
    stars.push(
      <li key={i}>
        <StarIcon className="w-5" key={stars.length} />
      </li>
    )
  }

  if (rating > n) {
    stars.push(
      <li key={n}>
        <HalfStarIcon className="w-5" key={stars.length} />
      </li>
    )
  }

  // Pad so each is 5 stars in length
  // while (stars.length < 5) {
  //   stars.push(
  //     <FontAwesomeIcon
  //       icon={faEmptyStar}
  //       size="lg"
  //       className="text-emerald-400"
  //       key={stars.length}
  //     />
  //   )
  //}

  return (
    <ul className="flex flex-row flex-nowrap gap-1 fill-amber-300">{stars}</ul>
  )
}

export default StarRating
