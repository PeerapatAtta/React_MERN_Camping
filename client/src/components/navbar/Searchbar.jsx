import React from 'react'
import { Input } from '../ui/input'

const Searchbar = () => {
  return (
    <Input
        type='text' 
        placeholder='Search...'
        className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6'
    />
  )
}

export default Searchbar