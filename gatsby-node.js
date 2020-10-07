const path = require("path")
const slash = require("slash")
const { createFilePath, createNodeField } = require(`gatsby-source-filesystem`)
const isIndex = name => name === `index` || name.indexOf("__index") !== -1

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `Mdx`) {
    const { createNodeField } = actions

    const fileNode =
      node.parent && node.parent !== "undefined" ? getNode(node.parent) : node

    const { dir = ``, name } = path.parse(fileNode.relativePath)

    let fileName = ``
    let priority = 1
    if (!isIndex(name)) {
      fileName = name.split("__")
      priority = parseInt(fileName[0], 10)
      fileName = fileName[fileName.length - 1]
    }

    createNodeField({
      node,
      name: `priority`,
      value: priority,
    })

    createNodeField({
      node,
      name: `slug`,
      value: path.posix.join(
        path.basename(fileNode.relativeDirectory),
        fileName
      ),
    })
    createNodeField({
      node,
      name: `category`,
      value: path.basename(fileNode.relativeDirectory),
      // value: fileNode.relativeDirectory,
    })
  }
}

// --------------------------------------------------------------
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   // create a new node field.
//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  // 2. Get markdown data
  // 3. Create new pages

  const contentTemplate = path.resolve(`./src/templates/Content.js`)

  const res = await graphql(
    `
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  res.data.allMdx.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `/docs/${edge.node.fields.slug}`,
      component: contentTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
