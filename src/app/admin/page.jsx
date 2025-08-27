'use client'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function AdminPageClient() {
  const { isSignedIn, user } = useUser()
  const router = useRouter()

  useEffect(() => {
    const isAdmin = isSignedIn && user?.publicMetadata?.role === 'admin'
    if (!isAdmin) router.replace('/') 
  }, [isSignedIn, user, router])

  
  if (!isSignedIn) return <div>Checking auth…</div>

  
  if (isSignedIn && user?.publicMetadata?.role !== 'admin') {
    return <div>Not authorized</div>
  }

  return <div>Admin Dashboard</div>
}
