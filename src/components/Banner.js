import React from 'react'

export default function Banner({sendImg,sendAlt}) {
  return(
      <div className='relative h-96'>
        <img className='object-cover object-center aspect-video w-[100%] h-96' src={sendImg} alt={sendAlt}/>
      </div>
)
}
