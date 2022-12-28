import React from 'react'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary','btn--secondary']
const SIZES = ['btn--large','btn--medium','btn--small','btn--nav']

export default function Button({
  children,
  type,
  hlink,
  onClick,
  buttonStyle,
  buttonSize,
}) {
  const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return(
    <>
    <Link to={hlink} className='btn-primary'>
      <button
      className = {`btn ${checkStyle} ${checkSize}`}
      onClick={onClick}
      type={type}
      >
      {children}
      </button>
    </Link>
    </>
  );
}
