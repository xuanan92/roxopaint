import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Footer(){
  return(
  <>
    <footer className='text-white bg-[#0b233e]'>
      <div className='p-1 grid grid-cols-4'>
          <div className='flex items-center justify-center'>
                <p className='h-auto text-center text-black'>
            <span className='block px-2 py-1 font-bold bg-gray-600 text-[#0b233e]'>
                  Dành cho
                <br />
                  chuyên gia
            </span>
                </p>
        </div>
        <div className='flex justify-center'>
          <ul className='w-11/12 space-y-1'>
            <li><Link to='./designers'>Nhà Thiết Kế</Link></li>
            <li><Link to='./architects'>Kiến Trúc Sư</Link></li>
            <li><Link to='./contractors'>Nhà Thầu</Link></li>
          </ul>
        </div>

        <div className='flex justify-center'>
          <ul className='w-11/12 space-y-1'>
            <li><Link to='./certificate'>Chứng chỉ</Link></li>
            <li><Link to='./documents'>Tài liệu</Link></li>
          </ul>
        </div>
        <div className='flex justify-center'>
          <ul className='w-11/12 space-y-1'>
            <li><Link to='./colorpalette'>Bảng màu sơn</Link></li>
            <li><Link to='./howtos'>Hướng dẫn</Link></li>
          </ul>
        </div>
      </div>
    <hr />

      <div className='p-1 grid grid-cols-4'>
        <div className='flex justify-center'>
          <ul className='w-11/12 space-y-1'>
            <h2 className='text-gray-600'>Roxo</h2>
            <li><Link to='./intro'>- Giới thiệu</Link></li>
            <li><Link to='./socialresponsibility'>- Trách nhiệm xã hội</Link></li>
            <li><Link to='./careers'>- Sự nghiệp</Link></li>
            <li><Link to='./publicrelation'>- Báo chí</Link></li>
          </ul>
        </div>
        <div className='flex justify-center'>
          <ul className='w-11/12 space-y-1'>
            <h2 className='text-gray-600'>Trợ giúp</h2>
            <li><Link to='./contact'>- Liên hệ</Link></li>
            <li><Link to='./faqs'>- FAQs</Link></li>
            <li><Link to='./paintcal'>- Tính sơn</Link></li>
            <li><Link to='./sitemap'>- Sitemap</Link></li>
          </ul>
        </div>
        <div className='flex justify-center'>
          <ul className='w-11/12 space-y-1'>
            <h2 className='text-gray-600'>Cửa hàng</h2>
            <li><Link to='./buynow'>- Mua ngay</Link></li>
            <li><Link to='./policies'>- Chính sách</Link></li>
          </ul>
        </div>
        <div className='flex justify-center'>
          <ul className='w-11/12 space-y-1'>
            <h2 className='text-gray-600'>Với đại lý</h2>
            <li><Link to='./becomepartner'>- Làm đại lý</Link></li>
            <li><Link to='./partnerswebsite'>- Web đại lý</Link></li>
          </ul>
        </div>
      </div>
    <hr />

      <div className='p-1 grid grid-cols-3'>
        <div className='flex items-center justify-end space-x-2'>
          <a href="https://facebook.com/sonroxo">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://youtube.com/roxopaint">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className='flex items-center justify-center'>
          <ul className='flex space-x-2'>
            <Link to='./'>
              <li>
                  <FontAwesomeIcon icon={faLocationDot} />
              </li>
            </Link>
            <Link to='./'>
              <li><span>Cửa hàng</span></li>
            </Link>
          </ul>
        </div>
        <div className='flex justify-start bg-[#0b233e] items-center'>
          <select className='text-[#0b233e]'>
            <option value='vietnamese' defaultValue='selected'>Vietnamese</option>
            <option value='english'>English</option>
          </select>
        </div>
      </div>
    </footer>
  </>
  )
}
