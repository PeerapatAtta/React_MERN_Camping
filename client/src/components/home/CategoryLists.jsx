import React from 'react'
import { categories } from '@/utils/categories'
import { useSearchParams } from 'react-router'

const CategoryLists = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const hdlFilter = (category) => {
        console.log(category)
        const params = new URLSearchParams(searchParams)
        const c = searchParams.get('category') || ''
        if (c === category) {
            params.delete('category')
        } else {
            params.set('category', category)
        }
        setSearchParams(params)
    }

    return (
        <div className='flex justify-between'>
            {categories.map((item) => {
                return (
                    <button
                        className='flex flex-col items-center m-2 hover:text-green-400'
                        key={item.label}
                        onClick={() => hdlFilter(item.label)}
                    >
                        <item.icon size={24} />
                        <p className='capitalize font-semibold'>{item.label}</p>
                    </button>
                )
            })}
        </div>
    )
}

export default CategoryLists