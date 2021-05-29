import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import QuantitySelect from "./QuantitySelect"

const CartItem = ({ product }) => {
  const { name, price, cartImage, quantity } = product
  return (
    <article className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center py-4 px-4 bg-white border border-gray-200 shadow-sm rounded-md overflow-hidden">
      {/* Product Image */}
      <div className="w-16 h-16 ">
        <GatsbyImage
          image={cartImage.localFiles[0].childImageSharp.gatsbyImageData}
          alt={name}
          className="w-full h-full"
        />
      </div>

      {/* Product Info */}
      <h3 className="text-center font-normal text-lg">{name}</h3>

      {/* Quantity select */}
      <QuantitySelect quantity={quantity} cartPage={true} product={product} />

      {/* Price */}
      <p className="text-center font-semibold text-lg text-primary">
        €{((price * quantity) / 100).toFixed(2)}
      </p>
    </article>
  )
}

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
}

export default CartItem
