import React from 'react'
import './VideoText.css'

const VideoText =()=>{
  return(
    <div className='row-m VideoText'>
      <div className='VideoTextLeft col-l-2'>
        <iframe className='video' src='https://www.youtube-nocookie.com/embed/ysZEBBy6Ihw' title='Youtube video player' frameborder='-' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
      </div>

      <div className='VideoTextRight col-l-2'>
        <h2>ROXO!</h2>
        <p>Sắc màu thịnh vượng hướng đến một cuộc sống sung túc, đầy đủ và kế thừa được cho cả thế hệ tương lai. Sự giàu có và trù phú không chỉ dừng ở những gam màu vật lý, mà còn nhắm đến sự đa dạng cảm xúc hình thành từ trong văn hóa sống, lối sống.<br />
        Màu sắc tạo nên những môi trường nhiều thăng bậc xúc cảm, nguồn cảm hứng bất tận cho hiệu suất công việc cũng như dung dưỡng tình cảm giữa các thành viên trong gia đình.
        </p>
      </div>
    </div>
  )
}
export default VideoText
