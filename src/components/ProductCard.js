import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const ProductCard = ({ product }) => {
  const { name, price, main_image } = product
  return (
    <article className="relative w-full h-72 border border-gray-200 rounded-md overflow-hidden">
      {/* Image */}
      <GatsbyImage
        image={main_image.localFiles[0].childImageSharp.gatsbyImageData}
        alt="chipotle"
        className="absolute inset-0"
      />

      <section className="relative h-full flex flex-col justify-between">
        {/* New tag */}
        <div className="pl-1 pt-1">
          {product.new && (
            <p className="bg-primary inline text-center text-xs py-0.5 px-2 text-white rounded-md">
              new
            </p>
          )}
        </div>

        <div className="flex justify-between items-end px-2 pb-1">
          {/* Name & Price */}
          <p>{name}</p>
          <p className="text-primary font-semibold">
            €{(price / 100).toFixed(2)}
          </p>
        </div>
      </section>
    </article>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
