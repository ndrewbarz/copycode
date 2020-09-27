import React from "react"
import SidebarSubListItem from "../SidebarSubListItem/SidebarSubListItem"
import classes from "./SidebarSubList.module.scss"

const SidebarSubList = ({ pagesByCategory, categoryKey }) => {
  return (
    <ul className={classes.SidebarSubList}>
      {pagesByCategory[categoryKey].pages.map(page => {
        return (
          <SidebarSubListItem
            id={page.node.id}
            slug={page.node.fields.slug}
            title={page.node.frontmatter.title}
            key={page.node.id}
          />
        )
      })}
    </ul>
  )
}

export default SidebarSubList
