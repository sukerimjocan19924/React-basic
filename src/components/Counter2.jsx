import React, {useRef, useState} from 'react'

const Counter2 = () => {
    const countRef = useRef(0)
    const [text, setText] = useState("")
    const clickCount = useRef(0)
    const up = () => {
        countRef.current+=1
        console.log(`현재의 카운트 ${countRef.current}`)
    }
    const handleClick = () => {
        clickCount.current+=1
        setText(`버튼이 ${clickCount.current}번 클릭 됨`)
    }
  return (
    <div>
        <p>text : {text}</p>
        <p>countRef : {countRef.current}</p>
        <button onClick={handleClick}>handle Click</button>    
        <button onClick={up}>+1씩 증가</button>    
    </div>
  )
}

export default Counter2