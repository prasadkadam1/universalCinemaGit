import React, { useContext, useState } from 'react'
import { exportables } from '../myContext/MyContext'

const Footer = () => {
  // let { universalBlack } = useContext(exportables)
  let { universalBlack, twitter1, fb, insta, youtube, snapchat, whatsp } = useContext(exportables)

  const [second, setsecond] = useState(["About",
    "NBCUniversal",
    "Home Entertainmentl",
    "Universal Products & Experiences",
    "Global Talent Development and Inclusion",
    "Universal Studios Parks & Resorts",
    "Careers",
    "Sitemap"])
  const [third, setthird] = useState(
    ["Terms of Service",
      "Privacy Policy",
      "Cookie Notice",
      "Ad Choices",
      "CA Notice",
      "Canada",
      "International",
      "ParentalGuide.com",
      "FilmRatings.com",
      "MPAA.org",
      "Contact Us",
      "Tobacco Policy",
      "YouTube Terms of Service",
      "Google Privacy Policy"
    ]
  )

  return (
    <div className='bg-[#1a1a1a] text-gray-500 text-sm  pt-7 flex h-[87vh]'>
      <main className='flex'>
        <div id='universalBlack' >
          <img src={universalBlack} alt="" className='w-16 m-4' />
        </div>
        <div className='m-4'>
          <p className='mb-2'>Movies</p>
          <p className='mb-2'>Trailers</p>
          <p className='mb-2'>News&Press</p>
        </div>
      </main>
      <main className='ms-48 mt-4'>
        {second.map((val, ind) => {
          return (
            <div key={ind}>
              <p className='pb-2'>{val}</p>
            </div>
          )
        })}
      </main>
      <main className='ms-12 mt-4'>
        {third.map((val, ind) => {
          return (
            <div key={ind}>
              <p className='pb-2'>{val}</p>
            </div>
          )
        })}
      </main>
      <main className='w-[30%]'>
        <div className='flex justify-evenly items-center'>

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
        <p className='m-2 text-[10px] float-end pe-3'>©2024 Universal Pictures</p>
      </main>
    </div>
  )
}

export default Footer
