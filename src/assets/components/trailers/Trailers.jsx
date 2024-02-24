import React, { useContext } from 'react'
import { exportables } from '../myContext/MyContext'
const Trailers = () => {
  let { yt } = useContext(exportables)
  return (
    <div >
      <main className='flex justify-between h-[15.5vh] items-center px-10  border-b-[1px] '>
        <h1 className='font-bold text-3xl'>Trailers</h1>
        <div className='text-[10px] bg-[#E62117] w-[7vw] text-white h-[4.5vh] rounded-full flex items-center justify-center'>FOLLOW</div>
      </main>
      <main className='flex justify-evenly h-[43vh] border-b-[1px] border-gray-300'>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/F1dvX9Vs0ns?si=gM9a3LJcnVmfmT-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-[280px] h-[160px]'></iframe>
          <p className='p-3'>Wicked - First Look</p>
        </div>

        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_inKs4eeHiI?si=mfBUqMtlHI8Cl_MY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-[280px] h-[160px]'></iframe>
          <p className='p-3'>Kung Ku Panda 4 | Official Trailer</p>
        </div>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/PhlLO3Nb3sY?si=mFyWgopp83vbp-ZT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-[280px] h-[160px]'></iframe>
          <p className='p-3'>Night Swim | Official Trailer 2</p>
        </div>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/j7jPnwVGdZ8?si=hTnZWRBpPDyzQIYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-[280px] h-[160px]'></iframe>
          <p className='p-3'>The Fall Guy | Official Trailer </p>
        </div>
      </main>
    </div>
  )
}

export default Trailers