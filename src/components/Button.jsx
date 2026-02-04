import React from 'react'

const Button = ({text, color='gray', children=null}) => {
//   console.log(text)

const onClickButton = (e)=>{
  console.log(text, color)
  console.log(e)
}
  return (
    <button
    style={{color:color}}
    onClick={()=>onClickButton()}
    >
        {text} - {color.toUpperCase()}
        <div>
            {children}
        </div>
    </button>
  )
}

export default Button