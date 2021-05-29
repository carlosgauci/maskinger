import React from "react"
import { useSelector } from "react-redux"
import { Link } from "gatsby"
import Button from "../components/Button"
import CartItem from "../components/CartItem"
import Checkout from "../components/Checkout"
import Seo from "../components/Seo"

const CartPage = () => {
  const cart = useSelector(state => state.cart)
  return (
    <>
      <Seo title="Shopping Cart | Maskinger" />
      <div className="container max-w-4xl pt-24 pb-4 md:pt-32 md:pb-8">
        <h2 className="text-2xl md:text-5xl font-normal font-heading text-center">
          Your Cart
        </h2>

        {cart.length ? (
          <section className="container px-0 max-w-5xl py-8 md:py-14 flex flex-col ">
            {cart.map(product => (
              <CartItem key={product.id} product={product} />
            ))}
            <Checkout />
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
    </>
  )
}

export default CartPage
