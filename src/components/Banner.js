import React from 'react'

export default function Banner({sendImg,sendAlt}) {
  return(
      <div className='relative'>
        <img className='object-none object-center w-full h-96 aspect-video' src={sendImg} alt={sendAlt}/>
      </div>
)
}
