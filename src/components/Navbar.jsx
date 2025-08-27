'use client'
import { SignInButton, UserButton, useUser  } from '@clerk/nextjs'

export const Navbar = () => {
    const {isSignedIn,user,} = useUser()
    const isAdmin = isSignedIn && user?.publicMetadata?.role == 'admin';
    // console.log(user)
  return (
    <div>
        {!isSignedIn && <SignInButton />}
        
         {isSignedIn && <div>{user.firstName} {isAdmin && <span> (Admin)</span>} <UserButton /></div>}   
        
    </div>
  )
}
