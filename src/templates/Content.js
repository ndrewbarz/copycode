import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Sidebar from "../components/Sidebar/Sidebar"
import classes from "./Content.module.scss"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`

const Content = props => {
  return (
    <Layout>
      <Sidebar />
      <main className={classes.Content}>
        <h1>{props.data.mdx.frontmatter.title}</h1>
        <p>{props.data.mdx.frontmatter.date}</p>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </main>
    </Layout>
  )
}

export default Content
