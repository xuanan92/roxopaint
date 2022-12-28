import React from 'react'
import TitleCenter from '../components/TitleCenter.js'
import Banner from '../components/Banner.js'
import Form from '../components/Form.js'

export default function ContactPage(){
  return(
  <>
    <Banner
    sendImg='./img/backgroundtheme.jpg'
    sendAlt='roxo banner background'
    />
    <TitleCenter name='Liên hệ'/>
    <Form action='' inputName inputTel inputEmail inputMes submitValue='Gửi'/>
  </>
  )
}
