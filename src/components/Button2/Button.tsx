import React from 'react'

export interface Props {
  text: string,
  text2?: number,
  // text2: string
}

const Button: React.FC<Props> = (props: Props) => {
  
  const { text } = props

  function add(num: number) {
    console.log(num + 2)
  }

  return <button onClick={() => add(1)}>{text}</button>
}

export default Button
