import React from 'react'
import Logo from './Logo'
import { Search } from 'lucide-react'
import Searchbar from './Searchbar'
import DropdownListManu from './DropdownListManu'

const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between items-center p-2 border border-gray-400'>
                <Logo/>
                <Searchbar/>
                <DropdownListManu/>
            </div>
        </nav>
    )
}

export default Navbar