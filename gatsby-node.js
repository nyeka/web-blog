const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogtemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    query {
      allContentfulContentBlog {
        edges {
          node {
            title
            slug
            date(formatString: "D MMMM, YYYY")
          }
        }
      }
    }
  `)

  res.data.allContentfulContentBlog.edges.forEach(edge => {
    createPage({
      component: blogtemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
