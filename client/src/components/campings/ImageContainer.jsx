import React from 'react'

const ImageContainer = ({ image, name }) => {
  return (
    <section className='h-[300px] md:h-[500px] mt-2'>
      <img src={image} alt={name} className='w-full h-full object-cover rounded-md' />
    </section>
  )
}

export default ImageContainer