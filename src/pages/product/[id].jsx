import Comments from '@/components/templates/product/Comments'
import ProductDetails from '@/components/templates/product/ProductDetails'
import React from 'react'

const Product = ({products , comments}) => {
  console.log('products =>' , products)
  console.log('comments =>' , comments)
  return (
    <div>
      <ProductDetails data={products} />
      <Comments data={comments} />
    </div>
  )
}

export async function getStaticProps(context) {
  const {params} = context

  const productRes = await fetch(`http://localhost:9000/menu/${params.id}`)
  const products = await productRes.json()

  const commentRes = await fetch('http://localhost:9000/comments')
  const comments = await commentRes.json()

  const productComments = comments.filter(comment => comment.productId === +params.id)
  return {
    props: {
      products : products ,
      comments : productComments 
    }
  }
}

export default Product

