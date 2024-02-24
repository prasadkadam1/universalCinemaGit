import React, { useState } from 'react'

const MainMiddleBody2 = () => {
  const [state, setstate] = useState([
    {
      text: "Trolls Band Together Brings the Trolls Magic to Life with Products, Games, Experiences, and More",
      about: "November 16, 2023 | via www.nbcuniversal.com",
    },
    {
      text: "Next Gen 2023: The Hollywood Reporter’s 35 Rising Executives 35 and Under ft. Michelle Momplaisir, Kelsey Balance and Megan Macmillan",
      about: "November 15, 2023 | via www.hollywoodreporter.com"
    },
    {
      text: "Donna Langley, Veronika Kwan Vandenberg and Pearlena Igbokwe Named to Variety Power of Women in Hollywood 2023",
      about: "November 15, 2023 | via variety.com"
    },
    {
      text: "Focus Features Lands U.S. Rights To Edward Berger’s Papal Thriller ‘Conclave’ Starring Ralph Fiennes And Stanley Tucci",
      about: "November 10, 2023 | via deadline.com"
    },
  ])
  return (
    <div className='h-[64vh] flex justify-center'>
      {state.map((value, index) => {
        return (
          <main key={index} className='bg-black h-[100%] w-[23%] border-[1px] border-gray-900 ] pt-10'>
            <p className='text-white p-4 font-light text-xl'>{value.text}</p>
            <p className='text-white p-4 text-[10px] font-[10px] text-gray-500'>{value.about}</p>
            <p className='text-blue-700 text-[12px] font- px-4'><u>KEEP READING</u></p>
          </main>

        )
      })}

      {/* 
      <main className='bg-black h-[100%] w-[22%] border-[1px] border-gray-900 ] '>.zndvbjb.j</main>
      <main className='bg-black h-[100%] w-[22%] border-[1px] border-gray-900 ] '>.zndvbjb.j</main>
      <main className='bg-black h-[100%] w-[22%] border-[1px] border-gray-900 ] '>.zndvbjb.j</main> */}
      {/* <main className='bg-black h-[100%] w-[22%] border-[1px] border-gray-900 ] '>.zndvbjb.j</main> */}
    </div>
  )
}

export default MainMiddleBody2