import React from 'react'
import { CircleUserRound } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';

const UserIcon = () => {
  const { user } = useUser();
  // console.log(user);

  if (user) {
    return (
      <img
        src={user.imageUrl}
        className='w-6 h-6 rounded-full object-cover'
      />
    )
  }

  return (
    <CircleUserRound />
  )
}

export default UserIcon