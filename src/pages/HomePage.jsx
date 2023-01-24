import React from "react"
import TitleCenter from '../components/TitleCenter.jsx'
import MediaText from '../components/MediaText.jsx'
import Cards from '../components/Cards.jsx'

export default function HomePage() {
    const productsCard = [
      {
        name:'Roxo Alpha',
        describe: 'The best product',
        mediaSource:'./img/roxodarktext.png',
        mediaType:'image',
        mediaAlt:"abc",
      },
      {
        name:'Roxo Extra',
        describe: 'The best product',
        mediaSource:'./img/roxodarktext.png',
        mediaAlt:"abc",
      },
      {
        name:'Roxo Ext',
        describe: 'The best product',
        mediaSource:'./img/roxodarktext.png',
        mediaAlt:"abc",
      },
      {
        name:'Roxo Ultra',
        describe: 'The best product',
        mediaSource:'./img/roxodarktext.png',
        mediaAlt:"abc",
      },
      {
        name:'Roxo Shield',
        describe: 'The best product',
        mediaSource:'./img/roxodarktext.png',
        meaAlt:"abc",
      },
      {
        name:'Roxo Pro',
        describe: 'The best product',
        mediaSource:'./img/mountainweather.jpg',
        mediaAlt:"abc",
      },
    ]
  return(
  <body>

    <TitleCenter name='Sắc Màu Thịnh Vượng' />

    <MediaText mediaType='youtube'
    mediaSource='https://www.youtube.com/embed/ysZEBBy6Ihw'
    textHead='Roxo - Để thế giới tươi đẹp hơn!'
    textPara={['Sắc màu thịnh vượng hướng đến một cuộc sống sung túc, đầy đủ và kế thừa được cho cả thế hệ tương lai. Sự giàu có và trù phú không chỉ dừng ở những gam màu vật lý, mà còn nhắm đến sự đa dạng cảm xúc hình thành từ trong văn hóa sống, lối sống.',<br/>,'Màu sắc tạo nên những môi trường nhiều thăng bậc xúc cảm, nguồn cảm hứng bất tận cho hiệu suất công việc cũng như dung dưỡng tình cảm giữa các thành viên trong gia đình.'
    ]}/>

    <div className='break' />

    <TitleCenter name= 'Tính năng sản phẩm' />

    <Cards dataCards={productsCard} ani='this is how' />

    <div className='break' />
    <div className='break' />
    <div className='break' />

    <MediaText mediaType='image'
    mediaSource='./img/mountainweather.jpg'
    mediaAlt='Roxo logo'
    textHead='Chống chọi với thời tiết'
    textPara={['Sử dụng sản phẩm sơn sắc màu thịnh vượng cho những không gian đặc biệt, khơi nguồn sáng tạo, hiệu quả vươn tới đỉnh cao giàu có, sang trọng!', <br/>,'Những sản phẩm bền theo thời gian cùng cơ chế bảo hành dài hạn và nổi bật tạo cơ sở niềm tin chưa từng lay chuyển về sự thịnh vượng.']}
    />

    <div className='break' />

  </body>
  )
}
