import PageHeader from '@/components/modules/pageHeader/PageHeader'
import Comment from '@/components/templates/testimonial/Comment'
import React from 'react'

const Testimonial = ({comments}) => {
  return (
    <div>
      <PageHeader route='Testimonial' />
      <Comment data ={comments} />
    </div>
  )
}

export async function getStaticProps(params) {

  const res = await fetch('http://localhost:9000/comments')
  const comments = await res.json()

  return{
    props:{
      comments
    } , 
    revalidate : 60 * 60*12
  }
}



export default Testimonial