import React from 'react'
import { Input } from '../ui/input'
import { useSearchParams } from 'react-router'
import { useDebouncedCallback } from 'use-debounce'

const Searchbar = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const updateSearch = useDebouncedCallback((value) => {
    console.log('Updating search params with value:', value)
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    setSearchParams(params)
  }, 500)

  const hdlSearch = (e) => {
    // Handle search input change
    // console.log(e.target.value)
    updateSearch(e.target.value)
  }

  return (
    <Input
      type='text'
      placeholder='Search...'
      className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6'
      onChange={hdlSearch}
    />
  )
}

export default Searchbar