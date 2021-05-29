import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import ProductSlider from "../components/ProductSlider"
import Button from "../components/Button"
import ProductInfo from "../components/ProductInfo"
import Breadcrumbs from "../components/Breadcrumbs"
import QuantitySelect from "../components/QuantitySelect"
import { useDispatch } from "react-redux"
import { addToCart } from "../actions/CartActions"
import { toast } from "react-toastify"

const ProductPage = ({ data }) => {
  const {
    name,
    price,
    id,
    slug,
    main_image,
    product_sides,
    model_image,
    cartImage,
  } = data.product.data

  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  // Images for slider
  const images = [
    main_image.localFiles[0].childImageSharp.gatsbyImageData,
    product_sides.localFiles[0].childImageSharp.gatsbyImageData,
    product_sides.localFiles[1].childImageSharp.gatsbyImageData,
    model_image.localFiles[0].childImageSharp.gatsbyImageData,
  ]

  // Item to add to cart
  const item = {
    id,
    name,
    price,
    slug,
    cartImage,
    quantity,
  }

  // Added to cart toast
  const notify = () =>
    toast(
      <div className="flex w-full h-full justify-center items-center">
        <Link to="/cart" className="flex items-center text-black">
          Added to cart!
        </Link>
      </div>,
      {
        position: "bottom-center",
        autoClose: 2000,
        progressClassName: "green-progress",
      }
    )

  // Handle Add to cart
  const handleCart = () => {
    dispatch(addToCart(item))
    notify()
    setQuantity(1)
  }

  return (
    <div className="min-h-screen pt-20">
      <Breadcrumbs name={`${name} Face Mask`} />

      <section className="container py-4 lg:py-6 flex flex-col lg:flex-row lg:gap-8 overflow-hidden">
        {/* Product slider */}
        <ProductSlider images={images} name={name} />

        {/* Product Info section */}
        <div className="w-full lg:w-2/5 flex flex-col gap-2 lg:gap-6 justify-center">
          {/* Product Title */}
          <h2 className="text-2xl md:text-3xl font-normal">{name} Face Mask</h2>

          {/* Price */}
          <p className="text-2xl md:text-3xl">€{(price / 100).toFixed(2)}</p>

          {/* Quantity select */}
          <QuantitySelect quantity={quantity} setQuantity={setQuantity} />

          {/* Add to cart */}
          <Button fullWidth={true} text="ADD TO CART" click={handleCart} />

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
        id
        slug
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
                sizes: "600"
                aspectRatio: 1
                placeholder: BLURRED
              )
            }
          }
        }

        cartImage: main_image {
          localFiles {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                quality: 80
                sizes: "100"
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
                sizes: "600"
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
                sizes: "600"
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
