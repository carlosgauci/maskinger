import React from "react"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../actions/CartActions"
import PropTypes from "prop-types"

const QuantitySelect = ({ product, quantity, setQuantity, cartPage }) => {
  const dispatch = useDispatch()

  const handleIncrease = () => {
    // If increased from the cart page - addToCart
    // If increased from the product page - increase quantity inside the input
    cartPage
      ? dispatch(addToCart({ ...product, quantity: 1 }))
      : setQuantity(quantity + 1)
  }

  const handleDecrease = () => {
    //   If on cart page - dispatch removeFromCart
    cartPage && dispatch(removeFromCart(product))

    // If on product page - decrease quantity
    quantity > 1 && !cartPage && setQuantity(quantity - 1)
  }

  return (
    <section className="flex ">
      {/* Decrease btn */}
      <button
        className="bg-gray-200 w-8 h-6 md:w-10 md:h-8 focus:outline-none"
        onClick={handleDecrease}
      >
        -
      </button>

      {/* Input */}
      <input
        className="w-8 h-6 md:w-10 md:h-8 text-center"
        type="number"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />

      {/* Increase btn */}
      <button
        className="bg-gray-200 w-8 h-6 md:w-10 md:h-8 focus:outline-none"
        onClick={handleIncrease}
      >
        +
      </button>
    </section>
  )
}

QuantitySelect.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func,
  cartPage: PropTypes.bool,
}
export default QuantitySelect
