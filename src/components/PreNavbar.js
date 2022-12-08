import React from 'react'
import './PreNavbar.css'

const PreNavbar =()=>{
  return(
    <div className="preNavbar">
      <ul>
      <li>
      <a href='./pages/ConstructionPage.js' className='hover'>Kênh dự án</a>
      </li>
      <li>
      <a href='./pages/LoginPage.js' className='hover'>Đăng nhập</a>
      </li>
      </ul>
    </div>
  )}
export default PreNavbar
