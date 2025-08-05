import React from 'react'

const ImageContainer = ({ image, name }) => {
  return (
    <section className='pt-2'>
      <img src={image} alt={name} className='w-full h-auto rounded-md' />
    </section>
  )
}

export default ImageContainer