import React, {useEffect, useState} from 'react'

const LifeCycle = () => {
    const [count, setCount] = useState(0)
    useEffect(( )=> {
        console.log('마운트 됨')
        return () =>{
            console.log('언마운트 됨')
        }
    }, [])

    useEffect(()=> {
        if (count >0) {
            console.log(`업데이트 : ${count}`)
        }
    }, [count])
  return (
    <div>
        <p>클릭된 숫자: {count}</p>
        <button onClick={()=>setCount(prev=>prev+1)}>클릭</button>
    </div>
  )
}

export default LifeCycle