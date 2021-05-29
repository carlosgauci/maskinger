import React from "react"
import Hero from "../components/Hero"
import ProductGrid from "../components/ProductGrid"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo />
      <Hero />
      <ProductGrid products={data.allAirtable.products} />
    </>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Products" }, data: { published: { eq: "true" } } }
      sort: { fields: data___order, order: ASC }
    ) {
      products: nodes {
        data {
          name
          slug
          id
          price
          new
          main_image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, sizes: "350", quality: 70)
              }
            }
          }
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
