import React from 'react'

function Progessbar(progress,color) {
    let styleobject={
        width:`${progress}%`,
        backgroundColor:color,
        
        height:"30px",
        borderRadius:"20px",
        

    }
   
  return (
    <>
    <div className="wraaper mt-[20px]">
    <div className="container">
      <div className="progessbar h-[30px] w-[100%] bg-red-400 rounded-[20px]">
          <div style={styleobject}>
              {progress}%kishan
          </div>

      </div>
    </div>
  </div>
    </>
  )
}

export default Progessbar

