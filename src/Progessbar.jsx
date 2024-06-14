import React from 'react'

function Progessbar(progress,color) {
    const styleobject={
        width:`${progress}%`,
        backgroundColor:color || 'lightgreen',
        height:30,
        borderRadius:20,

    }
  return (
    <>
    <div className="container">
    <div className="progessvar">
        <div style={styleobject}>
            {`${progress}`}
        </div>

    </div>
    </div>
    </>
  )
}

export default Progessbar

