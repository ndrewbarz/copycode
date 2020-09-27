import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import classes from "./Footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={classes.Footer}>
      <div className={classes.container}>
        <div className={classes.footerLinks}>
          <nav>
            <ul className={classes.navList}>
              <li>
                <Link
                  className={classes.navItem}
                  activeClassName={classes.active}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={classes.navItem}
                  activeClassName={classes.active}
                  to="/docs"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  className={classes.navItem}
                  activeClassName={classes.active}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.footerInfo}>
          <h2>COPYCODE</h2>
          &copy; {data.site.siteMetadata.author}
        </div>
      </div>
    </footer>
  )
}

export default Footer
