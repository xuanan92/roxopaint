import React from 'react'
import Banner from '../components/Banner.js'
import TitleCenter from '../components/TitleCenter.js'
import Cards from '../components/Cards.js'
import Button from '../components/Button.js'

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
    <div className='relative h-auto'>
      <Banner
      sendImg='./img/backgroundtheme.jpg'
      sendAlt='roxo banner background'
      />
      <div className='absolute bottom-5 left-5'>
        <Button hlink='/products'>Bảng giá</Button>
        <Button hlink='/colorpalette'>Bảng màu</Button>
      </div>
    </div>

    <TitleCenter name='Videos' subtitle='Xem Youtube để cập nhật thêm nhiều Videos hơn'/>
    <Cards dataCards={videolist}/>
  </>
  )
}
