import React from 'react'
import TitleCenter from '../components/TitleCenter.jsx'
import Form from '../components/Form.jsx'

export default function ContactPage(){
  return(
  <>
    <TitleCenter name='Liên hệ'/>
    <Form action='' inputName inputTel inputEmail inputMes submitValue='Gửi'/>
  </>
  )
}
