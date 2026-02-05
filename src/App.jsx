import React from 'react'
import Counter from './components/Counter'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'
import InputFocus from './components/InputFocus'
import Counter2 from './components/Counter2'

const App = () => {
  const user = {
    name: 'Alice',
    age: 21
  }
  return (
    <div>
      <h2>useState 연습</h2>
      <Counter2/>
      <hr/>
      <InputFocus/>
      <hr/>
      <Exam3 />
      <hr/>
      <Exam2 />
      <hr/>
      <Exam1 {...user}/>
      <hr/>
      <Counter />
    </div>
  )
}

export default App