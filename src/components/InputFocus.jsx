import React, {useRef} from 'react'

const InputFocus = () => {
    const inputRef = useRef(null)
    const focusInput = () => {
        inputRef.current.focus()
    }

  return (
    <div>
        <input ref={inputRef} type="text" 
        placeholder='버튼 클릭 시 포커스' />
        <button onClick={focusInput}>focus</button>
    </div>
  )
}

export default InputFocus