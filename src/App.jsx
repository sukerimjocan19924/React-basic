import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Article from './components/Article'
import Section from './components/Section'
import Header from './components/Header'


function App() {
  return (
    <div>
      <Header/>
      <Section/>
      <Article/>
      <h1>hello react</h1>
      <Main/>
    </div>
  )
}

export default App
