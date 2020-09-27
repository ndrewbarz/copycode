import React from "react"
import { Link } from "gatsby"
import Search from "../Search/Search"
import Menu from "../Menu/Menu"
import logo from "../../images/logo.svg"
import classes from "./Header.module.scss"

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.container}>
        <span className={classes.headerLogo}>
          <Link to="/">
            <img src={logo} alt="Copycode" />
          </Link>
        </span>
        <Search />

        <Menu />
      </div>
    </header>
  )
}

export default Header
