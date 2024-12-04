import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1 style={{color:"red"}}>{title}</h1>
        <p style={{color:"red"}}>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
