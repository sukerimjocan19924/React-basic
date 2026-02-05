import React, {useState} from 'react'

const Exam3 = () => {
    const [input, setInput] = useState('')
    const onChangeInput = (e) => {
        setInput(e.target.value)
    }
    const onClickButton = () => {
        setInput('')
    }
  return (
    <div>
        <input type="text" value={input} onChange={onChangeInput}/>
        <p>{input}</p>
        <button onClick={onClickButton}>클릭하면 글씨 사라짐</button>
    </div>
  )
}

export default Exam3

