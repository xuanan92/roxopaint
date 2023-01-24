import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import Banner from './Banner.jsx'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [navClick,setNavClick] = useState(false)
  const handleNavClick = () => setNavClick(!navClick)

  return(
    <>
    <div className='relative items-center block w-full clear-both stablet:flex'>
        <div className = 'break' />
        <div className='flex h-12 align-middle'>
          <div className='flex items-center h-12'>
            <img className='h-full' src='./img/roxodarktext.png' alt='roxo logo' />
          </div>
          <div className='flex items-center p-0 m-0 ml-auto text-center order:2 stablet:hidden'>
            <Button buttonStyle='btn--secondary' buttonSize='btn--nav' onClick={handleNavClick}>
              <FontAwesomeIcon icon={navClick ? faXmark : faBars} />
            </Button>
          </div>
        </div>

        <nav className={`items-center w-full m-0 p-0 clear-both bg-blue-900 mt-2 ${navClick ? 'block' : 'hidden stablet:flex stablet:w-auto stablet:bg-white stablet:ml-auto stablet:mt-0 stablet:items-center'}`}>
          <ul className='pl-4 text-white stablet:text-black stablet:flex stablet:items-center stablet:space-x-1'>
              <Link to='./' className='btn btn--hovernav'>
                <li className='py-2 stablet:px-2'>
                  Trang chủ
                </li>
              </Link>
              <Link to='./videos' className='btn btn--hovernav'>
                <li className='py-2 stablet:px-2'>
                Videos
                </li>
              </Link>
              <Link to='./technical' className='btn btn--hovernav'>
                <li className='py-2 stablet:px-2'>
                  Kỹ thuật
                </li>
              </Link>
              <Link to='./partner' className='btn btn--hovernav'>
                <li className='py-2 stablet:px-2'>
                Hợp tác
                </li>
              </Link>
              <Link to='./contact' className='btn btn--hovernav'>
                <li className='py-2 stablet:px-2'>
                Liên hệ
                </li>
              </Link>
          </ul>
        </nav>
    </div>

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
  </>
)
}
