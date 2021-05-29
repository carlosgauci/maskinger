import React from "react"
import PropTypes from "prop-types"
import ProductCard from "./ProductCard"

const ProductGrid = ({ products }) => {
  return (
    <section className="container py-8">
      <h3 className="font-heading text-center text-2xl md:text-4xl mb-4 md:mb-8">
        Face Masks
      </h3>

      <div className="grid auto-fit gap-8">
        {products.map(product => (
          <ProductCard key={product.data.id} product={product.data} />
        ))}
      </div>
    </section>
  )
}

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductGrid
