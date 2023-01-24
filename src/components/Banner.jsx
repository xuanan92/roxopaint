import React from 'react'

export default function Banner({sendImg,sendAlt}) {
  return(
    <>
      <div className='break' />
      <div className='relative h-[500px]'>
        <img className='object-cover object-center aspect-video w-[100%] h-[500px]' src={sendImg} alt={sendAlt}/>
      </div>
    </>
)
}
