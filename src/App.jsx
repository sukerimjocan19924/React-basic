import React from 'react'
import Counter from './components/Counter'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'

const App = () => {
  const user = {
    name: 'Alice',
    age: 21
  }
  return (
    <div>
      <h2>useState 연습</h2>
      <Exam3 />
      <Exam2 />
      <Exam1 {...user}/>
      <Counter />
    </div>
  )
}

export default App