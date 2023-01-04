import React from 'react'
import Banner from '../components/Banner.js'
import TitleCenter from '../components/TitleCenter.js'
import Button from '../components/Button.js'

export default function PartnerPage(){
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
    <TitleCenter name='Hợp tác' subtitle='Bắt đầu kinh doanh với sản phẩm sơn chất lượng nhất' />
    <div className='w-10/12 mx-auto'>
        <p className='indent-4'>
        Roxo xin gửi lời chân thành cảm ơn <strong>quý khách</strong>, các <strong> đối tác trong tương lai</strong> đã dành thời gian tìm hiểu Roxo.<br/>
        </p>
        <p className='indent-4'>
        Roxo coi trọng sự hợp tác này, và để sự hợp tác thành công, Roxo mong muốn đối tác cũng tập trung vào những giá trị cốt lõi chính sau đây:
        </p>
        <ol className='pl-12 list-decimal'>
            <li>Tập trung tạo giá trị cho người sử dụng.</li>
            <li>Minh bạch và tư duytất cả cùng thắng.</li>
            <li>Lao động hăng say thành công sẽ đến.</li>
        </ol>
        <p className='indent-4'>
        Sau khi thống nhất những <strong>quan điểm thành công</strong> này Roxo và đối tác sẽ thực hiện những trao đổi tiếp theo về:
        </p>
        <ol className='pl-12 list-decimal'>
            <li>Mục tiêu kinh doanh và cam kết doanh số từ đối tác.</li>
            <li>Các phương thức hỗ trợ từ Roxo.</li>
            <li>Ký hợp đồng và thủ tục tài chính liên quan.</li>
            <li>Triển khai kinh doanh.</li>
        </ol>
    </div>
    <div className='break'/>
  </>
  )
}
