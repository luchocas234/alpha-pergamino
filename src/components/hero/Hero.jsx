import React from 'react'
import Video from '../../media/video-hero.mp4'

export default function Hero() {
  return (
    <div name='home' className='w-full h-screen relative'>

        <video className='w-full h-full object-cover' autoPlay loop muted id='video' src={Video}/>
       
        <div className='w-full h-full bg-gray-900/20 absolute top-0 left-0'> </div>
   
    </div>
  )
}
