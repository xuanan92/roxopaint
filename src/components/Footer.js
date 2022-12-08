import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer =()=>{
  return(
  <>
    <footer>
      <div className='row'>
        <div className='professor col-s-3'>
          <p>
            <span>DÀNG CHO<br />CHUYÊN GIA</span>
          </p>
        </div>
        <div className='col-s-3'>
          <ul>
            <li><Link to='./designers'>Nhà Thiết Kế</Link></li>
            <li><Link to='./architects'>Kiến Trúc Sư</Link></li>
            <li><Link to='./contractors'>Nhà Thầu</Link></li>
          </ul>
        </div>
        <div className='col-s-3'>
          <ul>
            <li><Link to='./certificate'>Chứng chỉ</Link></li>
            <li><Link to='./documents'>Tài liệu</Link></li>
          </ul>
        </div>
        <div className='col-s-3'>
          <ul>
            <li><Link to='./colorpallete'>Bảng màu sơn</Link></li>
            <li><Link to='./howtos'>Hướng dẫn</Link></li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col-s-3'>
          <ul>
            <li><p>ROXO</p></li>
            <li><Link to='./intro'>Giới thiệu</Link></li>
            <li><Link to='./socialresponsibility'>Trách nhiệm xã hội</Link></li>
            <li><Link to='./careers'>Sự nghiệp</Link></li>
            <li><Link to='./publicrelation'>Báo chí</Link></li>
          </ul>
        </div>
        <div className='col-s-3'>
          <ul>
            <li><p>Trợ giúp</p></li>
            <li><Link to='./contact'>Liên hệ</Link></li>
            <li><Link to='./faqs'>FAQs</Link></li>
            <li><Link to='./paintcal'>Tính sơn</Link></li>
            <li><Link to='./sitemap'>Sitemap</Link></li>
          </ul>
        </div>
        <div className='col-s-3'>
          <ul>
            <li><p>Cửa hàng</p></li>
            <li><Link to='./buynow'>Mua ngay</Link></li>
            <li><Link to='./policies'>Chính sách</Link></li>
          </ul>
        </div>
        <div className='col-s-3'>
          <ul>
            <li><p>Với đại lý</p></li>
            <li><Link to='./becomepartner'>Làm đại lý</Link></li>
            <li><Link to='./partnerswebsite'>Web đại lý</Link></li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col-s-4'>
          <i />
        </div>
        <div className='col-s-4'>
          <ul>
            <li><Link to='https://facebook.com/sonroxo'><i className='fa-brands fa-square-facebook' /></Link></li>
            <li><span>Cửa hàng</span></li>
          </ul>
        </div>
        <div className='col-s-4'>
          <p>
            <select>
            <option value='vietnamese' selected='selected'>Vietnamese</option>
            <option valuw='english'>English</option>
            </select>
          </p>
        </div>
      </div>
    </footer>
  </>
  )
}
export default Footer
