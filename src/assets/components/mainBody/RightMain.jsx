import React, { Fragment, useContext, useState } from 'react'
import { exportables } from '../myContext/MyContext'

const RightMain = () => {
  let { argylleRight, nightSwimRight, migrationRight, oppenheimerRight, kungfuPanda4, monkeyManRight, abigail, theFallGuyRight, despicable, twisters, wickedRight } = useContext(exportables)
  let [movies, setMovies] = useState([
    {
      img: argylleRight,
      title: "Argylle",
      desc: "in theaters now",
    },
    {
      img: nightSwimRight,
      title: "Night Swim",
      desc: "watch at home",
    },
    {
      img: migrationRight,
      title: "Migration",
      desc: "watch at home",
    },
    {
      img: oppenheimerRight,
      title: "Oppenheimer",
      desc: "back in theaters",
    },
    {
      img: kungfuPanda4,
      title: "Kung Fu Panda 4",
      desc: "in theaters march 8",
    },
    {
      img: monkeyManRight,
      title: "Monkey Man",
      desc: "only in theaters april 5",
    },
    {
      img: abigail,
      title: "Abigail",
      desc: "only in theaters april 19",
    },
    {
      img: theFallGuyRight,
      title: "The Fall Guy",
      desc: "only in theaters may 3",
    },
    {
      img: despicable,
      title: "Despicable Me 4",
      desc: "only in theaters july 3",
    },
    {
      img: twisters,
      title: "Twisters",
      desc: "only in theaters july",
    },
    {
      img: wickedRight,
      title: "Wicked",
      desc: "in theates thankgiving",
    },

  ])
  return (
    <div className='h-[74vh] overflow-y-scroll w-[26%] bg-[#1a1a1a]' id='rightMain' >
      {movies.map((value, index) => {
        return (
          <Fragment key={index}>
            <div className='flex p-3 h-[15vh] border-b-[1px] border-gray-800' id='rightMainDiv' >
              <main><img src={value.img} alt="" className='w-[5.7vw]' /></main>
              <main className='px-2'>
                <p className='text-[#2473d2] text-[12px] font-extrabold'>{value.title}</p>
                <p className='text-white text-[10px] uppercase'>{value.desc}</p>
              </main>
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}

export default RightMain