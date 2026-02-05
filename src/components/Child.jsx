import React, {useEffect, useState} from 'react'

const Child = ({color}) => {
    const [message, setMessage] = useState("")
    useEffect(()=>{
        setMessage("색상이 변경 되었습니다.")
    }, [color])
    return (
    <div>
        <h1>자식 요소</h1>
        <p>현제 색상 <strong style={{color}}>{color}</strong></p>
        <p>{message}</p>    
    </div>
  )
}

export default Child