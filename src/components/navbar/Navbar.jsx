import React, { useContext } from 'react'
import { exportables } from '../../assets/components/myContext/MyContext'
const Navbar = () => {
  let { rotatingEarth, universal, twitter1, fb, insta, youtube, snapchat, whatsp } = useContext(exportables)
  return (
    <div className='sticky top-0'>
      <nav className='w-[100%] h-[10.5vh] flex bg-black justify-between'>
        <section className='w-[15%]'>
          <img src={rotatingEarth} alt="img not found" className='w-[7.2vw] absolute top-[-0.8vh] left-[6vw]' />
          <img src={universal} alt="" className='relative z-1 w-[11vw] left-[4.2vw] top-[-1vh]' />
        </section>
        <section className='w-[56.9%] flex text-white justify-between'>
          <div className='flex w-[50%] justify-between float-end items-center text-[13px]'>
            <main className=''>Movies</main>
            <main className=''>Trailers</main>
            <main className=''>News&Press</main>
            <main className='text-[5px]'>⚪⚪⚪</main>
          </div>
          <div className='w-[45%] flex justify-between items-center'>

            <main>
              <img src={twitter1} alt="" className='w-[3vw] rounded-full' />
            </main>
            <main>
              <img src={fb} alt="" className='w-[3vw] rounded-full' />

            </main>
            <main>
              <img src={insta} alt="" className='w-[3vw] rounded-full' />

            </main>
            <main>
              <img src={youtube} alt="" className='w-[3vw] rounded-full' />

            </main>
            <main>
              <img src={whatsp} alt="" className='w-[3vw] rounded-full' />

            </main>
            <main>
              <img src={snapchat} alt="" className='w-[3vw] rounded-full' />

            </main>
          </div>

        </section>
      </nav>
    </div>
  )
}

export default Navbar
