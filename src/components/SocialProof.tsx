import ratings from "../data/ratingData"
import reviewers from "../data/reviewData"
import RatingCard from "./RatingCard"
import ReviewCard from "./ReviewCard"


function SocialProof() {

  return (
    <section className="SocialProof">
      <div className="Heading">
        <h1>10,000+ of our users love our products.</h1>
        <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
      </div>
      <div className="Ratings">
        {ratings.map((rating) => <RatingCard key={rating.from} props={rating} />)}
      </div>
      <div className="Reviews">
        {reviewers.map((reviewer) => <ReviewCard key={reviewer.name} props={reviewer} />)}
      </div>
    </section>
  )
}

export default SocialProof
