import startSVG from '../assets/icon-star.svg'

type StarBoxProp = {
  rate: number
}

function StarBox({rate}: StarBoxProp) {
  const stars = []
  for (let i = 0; i < rate; i++) {
    stars.push(<img src={startSVG} alt="star icon"/>)
  }
  return (
    <div className='StarBox'>
      {stars.map(item => item)}
    </div>
  )
}

export default StarBox