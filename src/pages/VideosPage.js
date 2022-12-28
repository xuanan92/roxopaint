import React from 'react'
import Banner from '../components/Banner.js'
import TitleCenter from '../components/TitleCenter.js'
import Cards from '../components/Cards.js'

export default function VideosPage(){
  const videolist = [
    {
      name:'first video',
      describe:'how to do ads',
      mediaSource: 'https://youtube.com/embed/vmQTqHNToUI',
      mediaType: 'youtube',
    },
    {
      name:'first video',
      describe:'how to do ads',
      mediaSource: 'https://youtube.com/embed/vmQTqHNToUI',
      mediaType: 'youtube',
    },
    {
      name:'first video',
      describe:'how to do ads',
      mediaSource: 'https://youtube.com/embed/vmQTqHNToUI',
      mediaType: 'youtube',
    },
    {
      name:'first video',
      describe:'how to do ads',
      mediaSource: 'https://youtube.com/embed/vmQTqHNToUI',
      mediaType: 'youtube',
    },
    {
      name:'first video',
      describe:'how to do ads',
      mediaSource: 'https://youtube.com/embed/vmQTqHNToUI',
      mediaType: 'youtube',
    },
    {
      name:'first video',
      describe:'how to do ads',
      mediaSource: 'https://youtube.com/embed/vmQTqHNToUI',
      mediaType: 'youtube',
    },
  ]
  return(
  <>
    <Banner
    sendImg='./img/backgroundtheme.jpg'
    sendAlt='roxo banner background'
    />
    <TitleCenter name='Videos' subtitle='Danh sách videos từ Roxo'/>
    <Cards dataCards={videolist}/>
  </>
  )
}
