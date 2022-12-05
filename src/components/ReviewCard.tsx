
type ReviewCardProps= {
  props: {
    name: string,
    img: string,
    status: string,
    desc: string
  }
}

function ReviewCard({props}: ReviewCardProps) {
  const { name, img, status, desc } = props
  return (
    <div className="ReviewCard">
      <div>
        <img src={img} alt={`Photo of ${name}`} />
        <div>
          <p>{name}</p>  
          <p>{status}</p>
        </div>
      </div>
      <p>{desc}</p>
    </div>
  )
}

export default ReviewCard