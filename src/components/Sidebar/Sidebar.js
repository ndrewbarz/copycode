import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getPagesByCategory } from "../../utils/getPagesByCategory"
import SidebarToggleButton from "./SidebarToggleButton/SidebarToggleButton"
import SidebarRootList from "./SidebarRootList/SidebarRootList"
import { useMediaQuery } from "react-responsive"
import classes from "./Sidebar.module.scss"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      docs: allMdx(sort: { fields: fields___priority }) {
        group(field: fields___category) {
          edges {
            node {
              id
              fields {
                slug
                priority
                category
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `)
  // Toggle Sidebar
  const [toggle, setToggle] = useState(true)

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" })

  const toggleSidebarHandler = () => {
    setToggle(!toggle)
  }

  const cls = [classes.Sidebar]

  if (!toggle) {
    cls.push(classes.close)
  }

  // Categories
  // const categories = data.docs.group.map(page =>
  //   page.edges.map(edge => edge.node.fields.category)
  // )
  const pagesByCategory = getPagesByCategory(data.docs)
  return (
    <>
      {isTabletOrMobile && (
        <SidebarToggleButton onToggle={toggleSidebarHandler} isOpen={!toggle} />
      )}

      <nav className={cls.join(" ")}>
        <SidebarRootList data={pagesByCategory} />
      </nav>
    </>
  )
}

export default Sidebar
