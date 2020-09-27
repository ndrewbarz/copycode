import React, { useState } from "react"
import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import menu from "../../images/menu.svg"
import {
  faHome,
  faFolderOpen,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import classes from "./Menu.module.scss"

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const cls = [classes.headerNav]
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" })

  const onMenuToggleHandler = () => {
    setToggleMenu(!toggleMenu)
  }

  if (!toggleMenu) {
    cls.push(classes.hideMenu)
  }
  if (!isTabletOrMobile) {
    cls.push(classes.showMenu)
  }

  return (
    <>
      <div className={classes.menu} onClick={onMenuToggleHandler}>
        <img src={menu} alt="" />
      </div>

      <nav className={cls.join(" ")}>
        <ul className={classes.navList}>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.active}
              to="/"
            >
              <FontAwesomeIcon icon={faHome} />
              Home
            </Link>
          </li>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.active}
              to="/docs"
            >
              <FontAwesomeIcon icon={faFolderOpen} />
              Docs
            </Link>
          </li>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.active}
              to="/about"
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
