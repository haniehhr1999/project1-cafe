import PageHeader from '@/components/modules/pageHeader/PageHeader'
import Pricing from '@/components/templates/menu/Pricing'
import React from 'react'

const Menu = ({menu}) => {
  console.log(menu , 'menu')
  return (
    <div>
      <PageHeader route='menu' />
      <Pricing data = {menu} />
    </div>
  )
}

export async function getStaticProps(params) {

  const res = await fetch('http://localhost:9000/menu')
  const menu = await res.json()

  return{
    props:{
      menu
    } , 
    revalidate : 60 * 60*12
  }
}

export default Menu