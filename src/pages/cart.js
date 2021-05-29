import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "gatsby"
import Button from "../components/Button"

const CartPage = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  return (
    <div className="container max-w-5xl pt-24 pb-4 md:pt-28 md:pb-8">
      <h2 className="text-2xl md:text-5xl font-normal font-heading text-center">
        Your Cart
      </h2>

      {cart.length ? (
        <section className="container px-0 max-w-5xl py-8 md:py-14 flex flex-col gap-4">
          {cart.map(product => (
            <li key={product.id}>product</li>
          ))}
          {/* <Checkout /> */}
        </section>
      ) : (
        // Show cart is empty message if cart is empty
        <section className="flex flex-col items-center py-8">
          <p className="mb-4">Your cart is empty :(</p>
          <Link to="/">
            <Button text="Go Back" fullWidth={false} />
          </Link>
        </section>
      )}
    </div>
  )
}

export default CartPage
