import React from 'react'
import "../components/style/Exam1.css"

const Exam1 = ({name, age}) => {
  return (
    <div>
            나는 <span className='name'> {name}</span>이고, 
            내 나이는 <span className='age'> {age}</span>이다.
    </div>
  )
}

export default Exam1

