import StarBox from './StarBox'

type RatingCardProp = {
  props: {
    rate: number,
    from: string
  }
}

function RatingCard({props}: RatingCardProp) {
  const { rate, from } = props

  return (
    <div className="RatingCard">
      <StarBox rate={rate} />
      <p>Rated {rate} Stars in {from}</p>
    </div>
  )
}

export default RatingCard
