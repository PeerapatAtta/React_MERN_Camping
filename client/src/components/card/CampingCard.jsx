import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { Link } from 'react-router'
import FavoriteToggleButton from './FavoriteToggleButton'


const CampingCard = ({ camping }) => {
    // console.log(camping)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full max-w-sm mx-auto'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >

            <article className='relative bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300'>
                <Link to={`/user/camping/${camping.id}`} className='no-underline text-black'>
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
                        <p className='text-gray-600 text-sm'>{camping.description.substring(0, 50)} ...ดูเพิ่มเติม</p>
                    </div>
                    <div className='text-left'>
                        <p className='font-semibold'>Price: {camping.price} THB</p>
                        <p className='text-gray-600'>Location: {camping.lat.toFixed(2)}, {camping.lng.toFixed(2)}</p>
                    </div>
                </Link>
                {/* <FavoriteToggleButton /> */}
                <div className='absolute top-4 right-4'>
                    <FavoriteToggleButton 
                    campingId={camping.id}
                    isFavorite={camping.isFavorite}
                    />
                </div>
            </article>
        </motion.div >
    )
}

export default CampingCard