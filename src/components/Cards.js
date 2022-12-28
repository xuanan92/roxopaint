import React from 'react'

export default function Cards(props){
  const cards = props.dataCards.map((card,index)=>{
  return(
    <div className={`w-full p-2 m-2 bg-red-100 border border-solid border-slate-200 rounded-xl hover:transition-all duration-500 ease-in-out hover:bg-white drop-shadow-xl`} key={index}>
      <div className='flex justify-center w-full aspect-video hover:scale-200'>
        {card.mediaType === 'youtube' ?
          <iframe className='w-11/12 aspect-video' src={card.mediaSource} title='Youtube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
          :<img className='object-none object-center w-full aspect-video rounded-xl' src={card.mediaSource} alt={card.mediaAlt}/>}
      </div>
      <div className='w-full p-2'>
        <h3 className='mt-1'>{card.name}</h3>
        <p>{card.describe}</p>
      </div>
    </div>
  )})
  return <div className='w-8/12 mx-auto grid gap-x-4 grid-cols-3'>{cards}</div>
}
