import React from 'react'

const CampingCard = ({ camping }) => {
    return (
        <article className='bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300'>
            <div className='bg-white shadow-md rounded-lg p-4' >
                <img
                    src={camping.secure_url}
                    className='w-full h-full object-cover rounded-md '
                />
            </div>
            <div className='text-left'>
                <h1 className='text-lg font-bold mt-2'>{camping.title}</h1>
            </div>
            <div className='text-left'>
                <p className='text-gray-600'>{camping.description}</p>
            </div>
            <div className='text-left'>
                <p className='font-semibold'>Price: {camping.price} THB</p>
                <p className='text-gray-600'>Location: {camping.lat.toFixed(2)}, {camping.lng.toFixed(2)}</p>
            </div>
        </article>
    )
}

export default CampingCard