import React from 'react'

function Input(props) {
  return (
    <input name={props.name} onChange={props.onChange} id={props.id}  placeholder={props.placeholder} className={props.className} type={props.type} value={props.value}/>
  )
}

export default Input