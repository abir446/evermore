import Backgroundlines from '@/components/Backgroundlines'
import GridBackground from '@/components/GridBackground'
import React from 'react'

const Hero = () => {
  return (
    <GridBackground className='h-screen flex flex-col items-center justify-center'>
        <h1 className="text-4xl font-bold">Evermore</h1>
        <p className="text-center text-sm">Create your event, let others share there moments</p>
    </GridBackground>
  )
}

export default Hero