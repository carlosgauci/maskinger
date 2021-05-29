const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      products: allAirtable(
        filter: {
          table: { eq: "Products" }
          data: { published: { eq: "true" } }
        }
      ) {
        edges {
          node {
            data {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each product
  const pageTemplate = path.resolve(`src/templates/product-page.js`)
  result.data.products.edges.forEach(({ node }) => {
    const path = `/${node.data.slug}`
    createPage({
      path,
      component: pageTemplate,
      context: {
        slug: node.data.slug,
      },
    })
  })
}
