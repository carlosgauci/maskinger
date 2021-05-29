import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import ProductSlider from "../components/ProductSlider"

const ProductPage = ({ data }) => {
  const { name, main_image, product_sides, model_image } = data.product.data

  // Images for slider
  const images = [
    main_image.localFiles[0].childImageSharp.gatsbyImageData,
    product_sides.localFiles[0].childImageSharp.gatsbyImageData,
    product_sides.localFiles[1].childImageSharp.gatsbyImageData,
    model_image.localFiles[0].childImageSharp.gatsbyImageData,
  ]

  return (
    <div className="container mt-20 py-10 flex overflow-hidden">
      <ProductSlider images={images} name={name} />

      <div className="w-2/5">sasd</div>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    product: airtable(data: { slug: { eq: $slug } }) {
      data {
        name
        price
        social_image {
          raw {
            url
          }
        }
        main_image {
          localFiles {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                quality: 80
                sizes: "500"
                aspectRatio: 1
                placeholder: BLURRED
              )
            }
          }
        }

        model_image {
          localFiles {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                quality: 80
                sizes: "500"
                aspectRatio: 1
                placeholder: BLURRED
              )
            }
          }
        }

        product_sides {
          localFiles {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                quality: 60
                sizes: "500"
                aspectRatio: 1
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`

ProductPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProductPage
