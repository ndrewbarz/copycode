import React from "react"
import Header from "../Header/Header"
import "../../styles/index.module.scss"
import classes from "./Layout.module.scss"

const Layout = ({ children }) => {
  const cls = [classes.content, classes.container]
  return (
    <div className={classes.Layout}>
      <Header />
      <div className={cls.join(" ")}>{children}</div>
    </div>
  )
}

export default Layout
