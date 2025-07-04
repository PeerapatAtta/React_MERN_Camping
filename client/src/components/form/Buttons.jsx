import React from 'react'
import { Button } from '../ui/button'

const Buttons = ({ text }) => {
    return (
        <Button className="capitalize mt-2">
            {text}
        </Button>
    )
}

export default Buttons