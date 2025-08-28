'use client'
import { SignInButton, UserButton, useUser  } from '@clerk/nextjs'
import { MenuItem } from './ui/navbar-menu';


export const Navigation = () => {
    const {isSignedIn,user,} = useUser()
    const isAdmin = isSignedIn && user?.publicMetadata?.role == 'admin';
    // console.log(user)
  return (
    <MenuItem />
        
  )
}
