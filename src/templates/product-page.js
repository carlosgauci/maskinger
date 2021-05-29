import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import ProductSlider from "../components/ProductSlider"
import Button from "../components/Button"
import ProductInfo from "../components/ProductInfo"
import Breadcrumbs from "../components/Breadcrumbs"

const ProductPage = ({ data }) => {
  const {
    name,
    price,
    main_image,
    product_sides,
    model_image,
  } = data.product.data

  // Images for slider
  const images = [
    main_image.localFiles[0].childImageSharp.gatsbyImageData,
    product_sides.localFiles[0].childImageSharp.gatsbyImageData,
    product_sides.localFiles[1].childImageSharp.gatsbyImageData,
    model_image.localFiles[0].childImageSharp.gatsbyImageData,
  ]

  return (
    <div className="mt-20">
      <Breadcrumbs name={`${name} Face Mask`} />

      <section className="container py-4 lg:py-6 flex flex-col lg:flex-row lg:gap-8 overflow-hidden">
        {/* Product slider */}
        <ProductSlider images={images} name={name} />

        {/* Title, price & button */}
        <div className="w-full lg:w-2/5 flex flex-col gap-2 lg:gap-6 justify-center">
          <h2 className="text-2xl md:text-3xl font-normal">{name} Face Mask</h2>
          <p className="text-2xl md:text-3xl">€{(price / 100).toFixed(2)}</p>
          <Button fullWidth={true} text="ADD TO CART" />

          <ProductInfo />
        </div>
      </section>
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
