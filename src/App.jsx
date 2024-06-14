import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Progress from './Progessbar.jsx'

function App() {
  const [progress, setpregres] = useState(0);
  return (
    <>
    <Progress progress={progress} color={'lightgreen'}/>
    </>
  )
}

export default App
