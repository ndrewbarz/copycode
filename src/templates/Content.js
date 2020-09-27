import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Sidebar from "../components/Sidebar/Sidebar"
import classes from "./Content.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Content = props => {
  return (
    <Layout>
      <Sidebar />
      <main className={classes.Content}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </main>
    </Layout>
  )
}

export default Content
