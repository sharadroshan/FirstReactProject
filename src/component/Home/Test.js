import { Button } from '@mui/material'
import React, { useState } from 'react'

export default function Test() {

  const [color, setColor] = useState("secondary")
  const [disableBtn,setDisableBtn] = useState (false)

  function clickFunction() {
    setDisableBtn(true)
    setColor("primary")
  }
  return (
    <div>
      <Button variant='contained' color={color} size='large' disabled={disableBtn} onClick={()=>clickFunction()}>Click me</Button>
    </div>
  )
}
