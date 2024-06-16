import React from 'react'

function Progessbar(props) {
  let styleobject = {
    width: `${props.progress}%`,
    backgroundColor: props.color,

    height: "30px",
    borderRadius: "20px",


  }

  return (
    <>
      <div className="wraaper mt-[20px]">
        <div className="container">
          <div className="progessbar h-[30px] w-[100%] bg-red-400 rounded-[20px]">
            <div style={styleobject}>
              {props.progress}%Downloading
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Progessbar

