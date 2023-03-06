import React from "react";

function Label(props) {
  return(
      <label htmlFor={props.htmlFor} className={props.class}>{props.label}</label>
  )
}

export default Label