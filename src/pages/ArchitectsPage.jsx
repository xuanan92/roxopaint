import React, {useState} from 'react'

export default function ArchitectsPage(){
  const [click,setClick] = useState(null)

  return(
    <>
    <button onClick={() => setClick('A')}>Button A</button>
    <button onClick={() => setClick('B')}>Button B</button>
    <p className={click==='A'? 'block':'hidden'}>
    This is after clicked button A
    </p>
    <p className={click==='B'? 'block':'hidden'}>
    This is after clicked button B
    </p>
    </>
  )
}
