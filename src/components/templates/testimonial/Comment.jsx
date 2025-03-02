import React from 'react'

const Comment = ({data}) => {
  return (
    <div>
      Comment
      {
        data.map(item => <div className='border border-red-400'>
          <img src={item.profile} alt="" />
          <h1>{item.username}</h1>
          <p>
            {item.body}
          </p>
        </div>)
      }
      </div>
  )
}

export default Comment