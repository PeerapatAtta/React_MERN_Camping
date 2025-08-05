//rafce
import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router';

const ProtectRoute = ({ el }) => {
  // Add your authentication logic here
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return (
      <div>
        <p>You need to sign in to access this page.</p>
        <Link to="/">Home</Link>
      </div>
    );
  }

  return el;
}

export default ProtectRoute