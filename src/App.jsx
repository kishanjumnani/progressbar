import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Progress from './Progessbar.jsx'

function App() {
  const [progress, setpregres] = useState(0);
  useEffect(() => {

    let time;
    if (progress < 100) {
      time = setInterval(() => {
        setpregres((prev) => prev + 1);
      }, 1000);

    }

    return () => clearInterval(time);

  }, [progress]);


  return (
    <>
      <div className="App">
        <Progress progress={progress} color="lightgreen"></Progress>
      </div>
    </>
  )
}

export default App
