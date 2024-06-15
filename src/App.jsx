import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Progress from './Progessbar.jsx'

function App() {
  const [progress, setpregres] = useState(0);
useEffect(()=>{
//   if (progress<100){
//   const time=setInterval(()=>{
//       setpregres((prev)=>prev+1)
//   },20)
//   console.log(time)
// }
// return ()=>clearInterval(time)
    
// },[progress])
let time;
if (progress < 100) {
  time = setInterval(() => {
setpregres((prev)=>prev+1)  
  }, 25)
  console.log(time);
}

return ()=> clearInterval(time);

}, [progress])


  return (
    <>
    <Progress progress={progress} color={"lightGreen"}/>
    </>
  )
}

export default App
