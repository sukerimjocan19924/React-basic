import React, {useState} from 'react'
import Child from './Child'

const Parent = () => {
    const colors = ["red", "blue", "green"]

    const [index, setIndex] = useState(0)
    const changeColor = () => {
        // let next = index+1

        // if (next === colors.length) {
        //     next=0
        // }
        // setIndex(next)

        setIndex((prev)=>(prev+1)%colors.length)
        console.log(`현제 인덱스: ${index}`)
    }
  return (
    <div>
        <Child color={colors[index]}/>
        <button onClick={changeColor}>색상 변경</button>
    </div>
  )
}

export default Parent