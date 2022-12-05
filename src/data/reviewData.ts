type reviewer = {
  name: string,
  img: string,
  status: string,
  desc: string
}
const imgUrl = './reviewerImages/'
const reviewers: reviewer[] = [
  {
    name: 'Colton Smith',
    img: imgUrl + 'image-colton.jpg',
    status: 'Verified Buyer',
    desc: '" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "'
  },
  {
    name: 'Irene Roberts',
    img: imgUrl + 'image-irene.jpg',
    status: 'Verified Buyer',
    desc: '" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "'
  },
  {
    name: 'Anne Wallace',
    img: imgUrl + 'image-anne.jpg',
    status: 'Verified Buyer',
    desc: '" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "'
  }
]

export default reviewers
