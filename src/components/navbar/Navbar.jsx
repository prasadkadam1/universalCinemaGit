import React, { useContext } from 'react'
import { exportables } from '../../assets/components/myContext/MyContext'
const Navbar = () => {
  let { rotatingEarth, universal } = useContext(exportables)
  return (
    <div>
      <nav className='w-[100%] h-[12vh] flex bg-black justify-between'>
        <section className='w-[15%]'>
          <img src={rotatingEarth} alt="img not found" className='w-[7.5vw] absolute top-0 left-16' />
          <img src={universal} alt="" className='relative z-1 w-[11vw] left-10' />
        </section>
        <section className='w-[55%] flex text-white justify-between'>
          <div className='flex w-[50%] justify-between float-end items-center'>
            <main className=''>Movies</main>
            <main className=''>Trailers</main>
            <main className=''>News&Press</main>
            <main className=''>...</main>
          </div>
          <div className='w-[15%]'>

            <main></main>
            <main></main>
            <main></main>
            <main></main>
            <main></main>
            <main></main>
          </div>
        </section>
      </nav>
    </div>
  )
}

export default Navbar
