import React from 'react'
import TitleCenter from '../components/TitleCenter.jsx'
import Cards from '../components/Cards.jsx'

export default function VideosPage(){
  const videolist = [
    {
      name:'Sơn nhũ vàng 24k',
      describe:'Đẹp lộng lẫy cùng ánh kim Roxo',
      mediaSource: 'https://youtube.com/embed/vmQTqHNToUI',
      mediaType: 'youtube',
    },
    {
      name:'Xử lý chống thấm mattit',
      describe:'Sơn chống thấm và xử lý muối',
      mediaSource: 'https://youtube.com/embed/tlrSB9nIDco',
      mediaType: 'youtube',
    },
    {
      name:'Chống thấm ngược Roxo',
      describe:'Test bề mặt chống thấm',
      mediaSource: 'https://youtube.com/embed/3naYa8Ocrp8',
      mediaType: 'youtube',
    },
  ]
  return(
  <>
    <TitleCenter name='Videos' subtitle='Xem Youtube để cập nhật thêm nhiều Videos hơn'/>
    <Cards dataCards={videolist}/>
  </>
  )
}
