import React, { useContext } from 'react'
import { exportables } from '../myContext/MyContext'

const LeftMain = () => {
  let { argylle } = useContext(exportables)
  return (
    <div className={`w-[75%] h-[70vh] border-2]`} id='mainDivImg'  >

    </div>
  )
}

export default LeftMain