import React from "react"
import { Link } from "gatsby"
import classes from "./SidebarSubListItem.module.scss"

const SidebarSubListItem = ({ title, slug, id }) => {
  return (
    <li key={id} className={classes.sidebarSubListItem}>
      <Link to={`/docs/${slug}`} activeClassName={classes.active}>
        {title}
      </Link>
    </li>
  )
}

export default SidebarSubListItem
