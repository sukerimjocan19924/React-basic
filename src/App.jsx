import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Aside from './components/Aside'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {

  return (
    <div className='container'>
      <Header/>
      <Nav/>
      <div className='inner'>
        <Aside/>
        <Content/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
