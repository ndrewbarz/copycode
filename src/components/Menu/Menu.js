import React, { useState } from "react"
import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"
import menu from "../../images/menu.svg"
import homeIcon from "../../images/menu-icons/home.svg"
import docsIcon from "../../images/menu-icons/docs.svg"
import aboutIcon from "../../images/menu-icons/about.svg"
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
              <img src={homeIcon} alt="" />
              Home
            </Link>
          </li>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.active}
              to="/docs"
            >
              <img src={docsIcon} alt="" />
              Docs
            </Link>
          </li>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.active}
              to="/about"
            >
              <img src={aboutIcon} alt="" />
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
