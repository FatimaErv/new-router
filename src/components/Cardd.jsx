import React from 'react'
import "./cardd.css"

function Cardd({data}) {
  return (
    <div className='item'>
      <img src={data.image} alt="" />
      <div className='item-content'>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    </div>
  )
}

export default Cardd
