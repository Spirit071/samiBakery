import React from 'react'
import { Image } from '../components'

export default function Home() {

  return (
    <div>
      <h2 className='text-2xl'>Some Products...</h2>
      <div className="flex align-center justify-center 
      md:py-60 sm:py-20
      gap-2 md:gap-[8vh]">
        <Image/>
        <Image/>
        <Image/>
      </div>
    </div>
  )
}
