'use client'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function layout({children}) {
  const { isSignedIn, user, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded) {
      const isAdmin = isSignedIn && user?.publicMetadata?.role === 'admin'
      if (!isAdmin) {
        router.replace('/') 
      }
    }
  }, [isLoaded, isSignedIn, user, router]) 
  if (!isLoaded) {
    return <div>Loading...</div>
  }
  const isAdmin = isSignedIn && user?.publicMetadata?.role === 'admin'
  if (isLoaded && isAdmin) {
    return <div>{children}</div>
  }
  return <div>Not authorized</div>
}