import React from 'react'

export default function Button() {
  
  const { text } = props

  function add(num) {
    console.log(num + 1)
  }

  return <button onClick={() => add(1)}>{text}</button>
}
