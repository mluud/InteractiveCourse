import React from 'react'

const Information = (props) => {
  return (
    <div>
      
      <p>I am from {props.home} </p>
      <p>I study in {props.study} </p>
      <p>I like {props.like} </p>
    </div>
  )
}

export default Information
