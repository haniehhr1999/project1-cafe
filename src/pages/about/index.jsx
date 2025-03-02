import PageHeader from '@/components/modules/pageHeader/PageHeader'
import Story from '@/components/templates/about/Story'
import React from 'react'

const About = () => {
  return (
    <div>
      <PageHeader route='About' />
      <Story />
    </div>
  )
}

export default About