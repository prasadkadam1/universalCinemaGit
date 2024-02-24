import React, { useContext } from 'react'
import { exportables } from '../myContext/MyContext'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const LeftMain = () => {
  let { mainImg } = useContext(exportables)
  return (
    <div className="w-[74%] h-[74vh] flex justify-around pb-5 items-end" id='mainDivImg'>

      <div className='w-[38px] h-[38px] rounded-full bg-white flex justify-center items-center'><FaArrowLeft className='text-blue-800 text-xs' /></div>
      <div className='w-[220px] h-[38px] rounded-full bg-white flex justify-end items-center pe-1'><span className='text-[#2473d2] text-xs font-bold pe-10'>ABOUT THE FILM</span> <span className='w-[32px] h-[32px] rounded-full bg-white flex justify-center items-center bg-slate-200'><FaArrowRight className='text-blue-800 text-xs ' /></span></div>
      <div className='w-[220px] h-[38px] rounded-full bg-[#2473d2] flex justify-end items-center pe-1'><span className='text-white text-xs font-bold pe-10'>GET TICKETS</span> <span className='w-[32px] h-[32px] rounded-full bg-[#2164ae] flex justify-center items-center bg-[#2473d2]'><FaArrowRight className='text-gray-300 text-xs' /></span></div>
      <div className='w-[220px] h-[38px] rounded-full bg-white flex justify-end items-center pe-1'><span className='text-[#2473d2] text-xs font-bold pe-10'>WATCH THE TRAILER</span> <span className='w-[32px] h-[32px] rounded-full bg-white flex justify-center items-center bg-slate-200'><FaArrowRight className='text-blue-800 text-xs' /></span></div>
      <div className='w-[38px] h-[38px] rounded-full bg-white flex justify-center items-center'><FaArrowRight className='text-blue-800 text-xs' /></div>
    </div>
  )
}

export default LeftMain