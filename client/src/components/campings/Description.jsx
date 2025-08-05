import React from 'react'

const Description = ({ text }) => {
  return (
    <article className='p-4 bg-white shadow-md rounded-md mt-4'>
        <p className='text-gray-700 text-left'>{text}</p>
    </article>
  )
}

export default Description