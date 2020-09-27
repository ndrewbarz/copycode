import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import classes from "./SidebarToggleButton.module.scss"

const SidebarToggleButton = ({ onToggle, isOpen }) => {
  const cls = [classes.SidebarToggleButton]
  if (isOpen) {
    cls.push(classes.open)
  }
  return (
    <button className={cls.join(" ")} onClick={onToggle}>
      <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
    </button>
  )
}

export default SidebarToggleButton
