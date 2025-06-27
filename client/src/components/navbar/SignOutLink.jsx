import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from '@clerk/clerk-react';
import { Toaster } from '../ui/sonner';
import { toast } from "sonner"

const SignOutLink = () => {
    // const { toast } = Toaster()

    const handleLogout = () => {
        // alert("Logout successful");
        toast("Logout successful");
    }

    return (
        <SignOutButton redirectUrl='/'>
            <button className="w-full text-left" onClick={handleLogout}>Logout</button>
        </SignOutButton>
    )
}

export default SignOutLink