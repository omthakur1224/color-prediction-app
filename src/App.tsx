import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Color from './components/Color'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)
  const [buttonStatus, setButtonStatus] = useState<boolean>(false)
  return (
    <div className="App">
      <h1>
        <Timer setButtonStatus={setButtonStatus} />
      </h1>
      <Color buttonStatus={buttonStatus} />
    </div>
  )
}

export default App
