import React, { createContext, useState } from 'react'
export let exportables = createContext()
import abigail from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/abigail.jpg"
import argylle from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/argylle.jpg"
import argylleRight from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/argylleRight.jpg"
import despicable from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/despicable.jpg"
import fallGuyTrailer from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/fallGuyTrailer.jpg"
import kungfuPanda4 from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/kungfuPanda4.jpg"
import kungfuPanda4Trailer from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/kungfuPanda4Trailer.jpg"
import migrationRight from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/migrationRight.jpg"
import nightSwimRight from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/nightSwimRight.jpg"
import nightSwimTrailer from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/nightSwimTrailer.jpg"
import oppenheimerImg from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/oppenheimerImg.jpg"
import oppenheimerRight from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/oppenheimerRight.jpg"
import ted from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/ted.jpg"
import theFallGuy from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/theFallGuy.jpg"
import twisters from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/twisters.jpg"
import voice from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/voice.jpg"
import wicked2 from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/wicked (2).jpg"
import wicked from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/wicked.jpg"
import wickedRight from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/wickedRight.jpg"
import rotatingEarth from "../../images/Rotating_earth_animated_transparent.gif"
import universal from "../../images/deqt17f-e7a573d5-3430-44c4-8f3b-62c1064f0d7d.png"

const MyContext = ({ children }) => {
  let [images, setImages] = useState(
    {
      abigail, argylle, argylleRight, despicable, fallGuyTrailer, kungfuPanda4, kungfuPanda4Trailer, migrationRight, nightSwimRight, nightSwimTrailer, oppenheimerImg, oppenheimerRight, ted, theFallGuy, twisters, voice, wicked2, wicked, wickedRight, rotatingEarth, universal
    }
  )
  return (
    <exportables.Provider value={images}>{children}</exportables.Provider>
  )
}

export default MyContext