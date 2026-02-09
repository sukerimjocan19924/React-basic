import React from 'react'
import SquareCalc from './components/SquareCalc'
import SortableList from './components/SortableList'

const App = () => {
  return (
    <div>
      <SortableList/>
      <hr/>
      <SquareCalc/>
    </div>
  )
}

export default App