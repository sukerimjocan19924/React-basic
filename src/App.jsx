import React, {useState} from 'react'
import Counter from './components/Counter'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'
import InputFocus from './components/InputFocus'
import Counter2 from './components/Counter2'
import LifeCycle from './components/LifeCycle'

const App = () => {
  const [state, setState] = useState(true)
  const user = {
    name: 'Alice',
    age: 21
  }
  return (
    <div>
      <h2>useState, useRef, useEffect 연습</h2>
      <button onClick={()=>setState(true)}>마운트</button>
      <button onClick={()=>setState(false)}>언마운트</button>
      {state && 
        <LifeCycle/>
      }
      <hr/>
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