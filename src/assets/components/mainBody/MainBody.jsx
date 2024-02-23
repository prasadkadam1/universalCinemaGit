import React from 'react'
import LeftMain from './LeftMain'
import RightMain from './RightMain';

const MainBody = () => {
  return (
    <div className='flex'>
      <LeftMain></LeftMain>
      <RightMain></RightMain>
    </div>
  )
}

export default MainBody