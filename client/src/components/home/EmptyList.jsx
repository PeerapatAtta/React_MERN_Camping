import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'


const EmptyList = () => {
    return (
        <div className='mt-4 flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold'>No results found</h1>
            <Button>
                <Link to="/">Clear Fillter</Link>
            </Button>
        </div>
    );

}

export default EmptyList