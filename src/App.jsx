import { useState } from 'react'
import './App.css'
import Header from './componenets/Header'
import Aside from "./componenets/Aside"
import Main from './componenets/Main'
import Footer from './componenets/Footer'

function App() {
  return (
    <div>
        <Header/>
        <div className='main-wrap'>
          <Aside/>
          <Main/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
