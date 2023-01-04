import React from 'react'

export default function MediaText({
  mediaType,
  mediaAlt,
  mediaSource,
  textHead,
  textPara
})
{
  return(
    <div className='stablet:flex'>
        <div className='flex items-center justify-center col-m-2'>
        {mediaType ==='youtube' && <iframe className='w-10/12 aspect-video' src={mediaSource} title='Youtube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen/>}
        {mediaType ==='image'&& <img className='w-10/12 object-cover object-bottom h-[400px]' src={mediaSource} alt={mediaAlt}/>}
        </div>

        <div className='flex items-center justify-center col-m-2'>
          <span className='block p-2'>
            <h2 className='text-center stablet:text-left'>{textHead}</h2>
            <p>
            {textPara}
            </p>
          </span>
        </div>
      </div>
  )
}
