import React from 'react'
import './TitleCenter.css'

const TitleCenter =({headContent})=>{
  return(
    <div className='titleCenter'>
    <h1>{headContent.name}</h1>
    </div>
)
}
export default TitleCenter
