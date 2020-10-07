import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import classes from "./Search.module.scss"

const Search = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            date
            spoiler
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  const nodes = data.allMdx.nodes.map(node => node)
  const [searchTerm, setSearchTerm] = useState("")
  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const results = !searchTerm
    ? nodes
    : nodes.filter(node =>
        node.frontmatter.title.toLowerCase().includes(searchTerm)
      )
  return (
    <div className={classes.searchBox}>
      <div className={classes.formField}>
        <input
          className={classes.searchInput}
          id="search"
          type="search"
          placeholder="Search for anything..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className={classes.searchList}>
        {results.length !== 0 ? (
          searchTerm.length > 0 ? (
            results.map(item => (
              <Link
                key={item.fields.slug}
                to={`/docs/${item.fields.slug}`}
                className={classes.searchListItem}
              >
                <div className={classes.searchResultsInfo}>
                  <h4>{item.frontmatter.title}</h4>
                  <span>
                    <small>{item.frontmatter.spoiler}</small>
                    <time>{item.frontmatter.date}</time>
                  </span>
                </div>
              </Link>
            ))
          ) : (
            ""
          )
        ) : (
          <span className={classes.searchListItem}>Sorry, nothing found</span>
        )}
      </div>
    </div>
  )
}

export default Search
