import React from "react"
import SidebarRootListItem from "../SidebarRootListItem/SidebarRootListItem"
import classes from "./SidebarRootList.module.scss"

const SidebarRootList = ({ data }) => {
  return (
    <ul className={classes.SidebarRootList}>
      {Object.keys(data).map((categoryKey, idx) => {
        return (
          <SidebarRootListItem
            categoryKey={categoryKey}
            idx={idx}
            data={data}
            key={idx + categoryKey}
          />
        )
      })}
    </ul>
  )
}

export default SidebarRootList
