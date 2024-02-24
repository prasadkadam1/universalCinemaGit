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
import monkeyManRight from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/monkeyMan'.jpg"
import theFallGuyRight from "../../../assets/images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/theFallGuy.jpg"
import rotatingEarth from "../../images/Rotating_earth_animated_transparent.gif"
import universal from "../../images/deqt17f-e7a573d5-3430-44c4-8f3b-62c1064f0d7d.png"
import mainImg from "../../../../src/assets/images/mainImg.jpg"
import fb from "../../images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/facebookMain.jpg"
import twitter1 from "../../images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/twitterMain.jpg"
import insta from "../../images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/instagramMain.jpg"
import youtube from "../../images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/youtubeMain.jpg"
import snapchat from "../../images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/snapchatMain.jpg"
import whatsp from "../../images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/whatsp.jpg"
import yt from "../../images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/youtubeLogo.jpg"
import universalBlack from "../../images/New folder/Universal Pictures _ New Movies In Theaters & Future Releases_files/universalpictureslogo_817071.jpg"
const MyContext = ({ children }) => {
  let [images, setImages] = useState(
    {
      abigail, argylle, argylleRight, despicable, fallGuyTrailer, theFallGuyRight, kungfuPanda4, kungfuPanda4Trailer, migrationRight, monkeyManRight, nightSwimRight, nightSwimTrailer, oppenheimerImg, oppenheimerRight, ted, theFallGuy, twisters, voice, wicked2, wicked, wickedRight, rotatingEarth, universal, mainImg, twitter1, fb, insta, youtube, snapchat, whatsp, yt, universalBlack
    }
  )
  return (
    <exportables.Provider value={images}>{children}</exportables.Provider>
  )
}

export default MyContext