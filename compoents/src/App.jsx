import './App.css'
import React from 'react'
import PureCounterComponent from './component/PureCounterComponent'
import SimpleCounterComponent from './component/SimpleCounterComponent'

function App() {
  return (
    <>
      <SimpleCounterComponent />
      <PureCounterComponent />

    </>
  )
}

export default App