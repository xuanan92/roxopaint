import React from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar =()=>{
  return(
  <>
    <div className='container'>
      <div className='NavbarLogo'>
      </div>
    <nav className='Navbar'>
      <ul>
          <li>
            <Link to='./'>Homepage </Link>
          </li>
          <li>
            <Link to='./products'> Sản phẩm Roxo </Link>
          </li>
          <li>
            <Link to='./videos'> Videos </Link>
          </li>
          <li>
            <Link to='./technical'> Kỹ thuật </Link>
          </li>
          <li>
            <Link to='./grow'> Phát triển kinh doanh </Link>
          </li>
          <li>
            <Link to='./contact'> Liên hệ </Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
  )
}
export default Navbar
