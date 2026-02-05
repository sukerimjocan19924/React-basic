import React, {useState} from 'react'

const Exam2 = () => {
    const [text, setText] = useState('Hello')

    const onClickButton = () =>{
        text === 'Hello' ? setText('Goodbye') : setText('Hello')
    }
  return (
    <div>
        <h1>{text}</h1>
        <button onClick={onClickButton}>click</button>
    </div>
  )
}

export default Exam2

