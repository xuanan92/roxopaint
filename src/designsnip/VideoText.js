import React from 'react'
import './VideoText.css'

const VideoText =({video, text})=>{
  return(
    <div className='row-m videoText'>
      <div className='videoTextLeft col-l-2'>
        <iframe className='video' src={video.src} title='Youtube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
      </div>

      <div className='videoTextRight col-l-2'>
        <h2>{text.h2content}</h2>
        <p>
          {text.para1}
        </p>
        <p>
          {text.para2}
        </p>
      </div>
    </div>
  )
}
export default VideoText
