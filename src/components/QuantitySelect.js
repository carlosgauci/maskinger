import React from "react"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../actions/cartActions"

const QuantitySelect = ({ product, quantity, setQuantity, cartPage }) => {
  const dispatch = useDispatch()

  const handleIncrease = () => {
    // If increased from the cart page - addToCart
    // If increased from the product page - increase quantity inside the input
    cartPage ? dispatch(addToCart(product)) : setQuantity(quantity + 1)
  }

  const handleDecrease = () => {
    //   If on cart page - dispatch removeFromCart
    cartPage && dispatch(removeFromCart(product))

    // If on product page - decrease quantity
    quantity > 1 && !cartPage && setQuantity(quantity - 1)
  }

  return (
    <section className="">
      {/* Decrease btn */}
      <button className="bg-gray-200 w-10 h-8" onClick={handleDecrease}>
        -
      </button>

      {/* Input */}
      <input
        className="w-10 h-8 text-center"
        type="number"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />

      {/* Increase btn */}
      <button className="bg-gray-200 w-10 h-8" onClick={handleIncrease}>
        +
      </button>
    </section>
  )
}

export default QuantitySelect
