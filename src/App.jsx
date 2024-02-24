import React from 'react'
import Navbar from './components/navbar/Navbar'
import MainBody from './assets/components/mainBody/MainBody';
import Trailers from './assets/components/trailers/Trailers';
import MainBody2 from './assets/components/mainBody2/MainBody2';
import Footer from './assets/components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainBody></MainBody>
      <Trailers></Trailers>
      <MainBody2></MainBody2>
      <Footer></Footer>
    </div>
  )
}

export default App