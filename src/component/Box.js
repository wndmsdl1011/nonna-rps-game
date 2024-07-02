import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
        <h1>{props.title}</h1>
        <img className="item-img"src='https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png'/>
        <h2>WIN</h2>    
    </div>
  )
}

export default Box
