import React from 'react'
import Banner from '../components/Banner.js'
import TitleCenter from '../components/TitleCenter.js'

export default function TechnicalPage(){
  const headerGuide=[
    {
      firstHeader:'A. Hướng dẫn thi công',
      secondHeader:'Đường dẫn',
    },
  ]
  const bodyGuide = [
    {
      name: 'Hướng dẫn thi công sơn bả Roxo',
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: 'Hướng dẫn thi công sơn giả gỗ cho tường Roxo',
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: 'Hướng dẫn thi công sơn nhũ cao cấp Roxo',
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: 'Hướng dẫn thi công sơn chống thấm tường Roxo',
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: 'Hướng dẫn thi công sơn chống thấm sàn Roxo',
      linkWeb: '',
      linkYoutube: '',
    },
  ]
  const headerTCCS=[
    {
      firstHeader:'B. Tiêu chuẩn cơ sở sơn Roxo',
      secondHeader:'Đường dẫn',
    },
  ]
  const bodyTCCS = [
    {
      name: ['Sơn ngoài trời: ', <br />, <strong>TCCS 01:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: ['Sơn lót kháng kiềm: ', <br />, <strong>TCCS 02:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: ['Sơn trong nhà: ', <br />, <strong>TCCS 03:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: ['Sơn chống thấm pha xi: ', <br />, <strong>TCCS 04:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: ['Bột bả ngoài trời: ', <br />, <strong>TCCS 05:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: ['Bột bả trong nhà: ', <br />, <strong>TCCS 06:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
  ]
  return(
  <>
    <Banner
    sendImg='./img/backgroundtheme.jpg'
    sendAlt='roxo banner background'
    />
    <TitleCenter name='Kỹ thuật' subtitle='Tổng hợp tài liệu kỹ thuật sơn'/>

    <Table dataHead={headerGuide} dataBody = {bodyGuide} />

    <Table dataHead={headerTCCS} dataBody = {bodyTCCS} />

  </>
  )
}

function Table(props){
  return(
    <table className='mx-auto border-separate table-auto'>
      {props.dataHead.map((dataA)=>(
        <thead className='bg-blue-900'>
          <th className='w-[135px] stablet:min-w-[355px] p-2 font-normal text-white text-start'>{dataA.firstHeader}</th>
          <th className='w-[70px] stablet:min-w-[150px] p-2 font-normal text-white'>{dataA.secondHeader}</th>
        </thead>
      ))
      }

      {props.dataBody.map((dataB,index)=>(
          <tr className='even:bg-red-200 border-bottom' key={index}>
            <td className='p-1 px-4'>{dataB.name}</td>
            <td className='p-1 px-4 text-center'>
              {dataB.linkWeb && <a href={dataB.linkWeb}>liên kết</a>}
              {(dataB.linkWeb && dataB.linkYoutube) && ' | '}
              {dataB.linkYoutube && <a href={dataB.linkYoutube}>youtube</a>}
            </td>
          </tr>
      ))
      }
    </table>
  )
}
