import React from 'react'
import TitleCenter from '../components/TitleCenter.js'
import Banner from '../components/Banner.js'
import Form from '../components/Form.js'
import Button from '../components/Button.js'

export default function ContactPage(){
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
    <TitleCenter name='Liên hệ'/>
    <Form action='' inputName inputTel inputEmail inputMes submitValue='Gửi'/>
  </>
  )
}
