import React from "react"

const HomePage =()=>{
  return(
  <>
    <div className='banner'>
      <div className='buttonContainer'>
        <button>Bảng giá</button>
        <button>Bảng màu</button>
      </div>
    </div>

    <div className='titleCenter'>
      <h1>Sắc Màu Thịnh Vượng</h1>
    </div>

    <div className='imgText'>
      <div className='imgTextLeft'>
        <iframe className='video' src='https://www.youtube-nocookie.com/embed/ysZEBBy6Ihw' title='Youtube video player' frameborder='-' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
      </div>
      <div className='imgTextRight'>
        <h2>ROXO!</h2>
        <p>Sắc màu thịnh vượng hướng đến một cuộc sống sung túc, đầy đủ và kế thừa được cho cả thế hệ tương lai. Sự giàu có và trù phú không chỉ dừng ở những gam màu vật lý, mà còn nhắm đến sự đa dạng cảm xúc hình thành từ trong văn hóa sống, lốt sống.<br />
        Màu sắc tạo nên những môi trường nhiều thăng bậc xúc cảm, nguồn cảm hứng bất tận cho hiệu suất công việc cũng như dung dưỡng tình cảm giữa các thành viên trong gia đình.
        </p>
      </div>
    </div>

    <div className='imgTextText'>
      <div className='imgText'>
        <div className='imgTextLeft'>
          <img src='%PUBLIC_URL%/logo512.png' alt='roxoimg'></img>
        </div>
        <div className='imgTextRight'>
          <p><strong> Sử dụng sản phẩm sơn sắc màu thịng vượng</strong> cho những không gian đặc biệt, khơi nguồn sáng tạo, hiệu quả vươn tới đỉnh cao giàu có, sang trọng!<br />
          Những sản phẩm bền theo thời gian cùng cơ chế bảo hành dài hạn và nổi bật tạo cơ sở niềm tin chưa từng lay chuyển về sự thịnh vượng.
          </p>

        </div>
      </div>
    </div>
  </>
  )
}
export default HomePage
