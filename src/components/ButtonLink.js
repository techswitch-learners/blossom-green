import React from "react"
import { Link } from "react-router-dom"
import "./Button.scss"

const ButtonLink = (props) => {
  return (
    <Link {...props} className={`Button ${props.variant ?? ""} ${props.className ?? ""}`}>
      {props.children}
    </Link>
  )
}

export default ButtonLink
