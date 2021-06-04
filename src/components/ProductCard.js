import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { productVariants } from "../framer/variants"

const ProductCard = ({ product }) => {
  const { name, price, main_image, slug } = product
  return (
    <Link to={slug}>
      <motion.article
        className="relative w-full h-72 border border-gray-200 rounded-md overflow-hidden"
        variants={productVariants}
        initial="initial"
        whileHover="hover"
      >
        {/* Image */}

        <GatsbyImage
          image={main_image.localFiles[0].childImageSharp.gatsbyImageData}
          alt={name}
          className="w-full h-full"
        />

        <section className="absolute inset-0 flex flex-col justify-between">
          {/* New tag */}
          <div className="p-1">
            {product.new && (
              <p className="bg-primary w-10 h-5 text-center text-xs py-0.5 px-2 text-white rounded-md">
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
      </motion.article>
    </Link>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
