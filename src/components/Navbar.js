import React, { useState} from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [click,setClick] = useState(true)
  const handleClick = () => {
    setClick(!click);
  }
  return(
    <div className='container'>
      <div className='NavbarLogo'>
        <img src={process.env.PUBLIC_URL+'./img/roxodarktext.png'} alt='roxo logo' />
        <div className='NavbarBar' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faBars : faXmark} />
        </div>
      </div>
      <nav className='Navbar disable'>
        <ul>
            <li>
              <Link to='./'> Trang chủ </Link>
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
  )
}

export default Navbar
