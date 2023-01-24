import React from 'react'

export default function TitleCenter({name, subtitle}){
  return(
    <div className='p-0 m-0 text-center'>
    <h1 className='p-0 mt-8'>
      {name}
    </h1>
    <h3 className='p-2 stablet:pt-4'>
    {subtitle}
    </h3>
    </div>
  )
}
