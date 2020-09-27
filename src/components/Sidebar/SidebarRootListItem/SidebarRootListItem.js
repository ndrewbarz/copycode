import React from "react"
import SidebarSubList from "../SidebarSubList/SidebarSubList"
import { toUpperCaseFirst } from "../../../utils/toUpperCaseFirst"
import classes from "./SidebarRootListItem.module.scss"

const SidebarRootListItem = ({ categoryKey, idx, data }) => {
  return (
    <li key={idx + categoryKey} className={classes.SidebarRootListItem}>
      <button id={idx + categoryKey} className={classes.SidebarRootListItemBtn}>
        <span className={classes.SidebarRootListTitle}>
          {toUpperCaseFirst(data[categoryKey].categoryName)}
        </span>
      </button>
      <SidebarSubList pagesByCategory={data} categoryKey={categoryKey} />
    </li>
  )
}

export default SidebarRootListItem
