import React from 'react'
import Banner from '../components/Banner.js'
import TitleCenter from '../components/TitleCenter.js'

export default function FAQsPage(){
  const faqs=[
    {
      question:'A. Hướng dẫn thi công',
      answer:'Đường dẫn',
    },
    {
      question:'B.  dẫn thi công',
      answer:'Đường dẫn',
    },
  ]
  return(
  <>
    <Banner
    sendImg='./img/backgroundtheme.jpg'
    sendAlt='roxo banner background'
    />
    <TitleCenter name='Những câu hỏi thường gặp' subtitle='Trong lĩnh vực sơn nước và thi công'/>

    <FAQs data={faqs} />
    <div className='break' />
  </>
  )
}

function FAQs(props){
  return(
    <div className='w-8/12 mx-auto bg-blue-50 rounded-2xl'>
      {props.data.map((content,index)=>(
        <div className='p-4' key={index}>
        <h3>{content.question}</h3>
        <p className='indent-8'>{content.answer}</p>
        </div>
      ))
      }
    </div>
  )}
