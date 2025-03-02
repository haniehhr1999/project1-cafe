import Link from 'next/link'
import React from 'react'

const PageHeader = ({route}) => {
  return (
    <div className='bg-sky-400'>
        <h1>
        {route}

        </h1>

        <div>
            <Link href='/'>home</Link> / {route}
        </div>

    </div>
  )
}

export default PageHeader