import React from 'react'
import { MessageIcon, PetProfileForm } from '../../Components'
import { useAuth } from '../../context'

const UserProfile = () => {
    const { username } = useAuth()
  return (
    <>
    <p>this is: {username}</p>
    <PetProfileForm/>
    <MessageIcon />
    </>
  )
}

export default UserProfile