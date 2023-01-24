import React from 'react'
import {Link} from 'react-router-dom'

export default function PreNavbar(){
  return(
    <div className='text-xs'>
      <div className="break" />
      <ul className='flex float-right'>
        <li className='inline-block px-2 py-1 mx-1 rounded hover:bg-red-50'>
        Working: T2-T6 (8am - 5pm)
        </li>
        <li className='inline-block px-2 py-1 mx-1 rounded hover:bg-red-50'>
        <Link to='./construction.js' className='hover'>Kênh dự án</Link>
        </li>
        <li className='inline-block px-2 py-1 mx-1 rounded hover:bg-red-50'>
        <Link to='./login' className='hover'>Đăng nhập</Link>
        </li>
      </ul>
    </div>
  )}
