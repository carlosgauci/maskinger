import React from "react"
import getStripe from "../utils/stripe"
import { useSelector } from "react-redux"
import { BiLoaderCircle } from "react-icons/bi"
import { useState } from "react"
import Button from "./Button"
import { shipping } from "../utils/shipping"

const Checkout = () => {
  const cart = useSelector(state => state.cart)
  const [loader, setLoader] = useState(false)

  // Cart total
  const cartTotal =
    cart.reduce((total, item) => total + item.price * item.quantity, 0) +
    shipping(cart)

  // Checkout
  const checkOut = async () => {
    const payload = {
      items: cart,
    }
    setLoader(true)
    performPurchase(payload)
  }

  const performPurchase = async payload => {
    const response = await fetch("/api/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(res => res.json())

    const stripe = await getStripe(response.publishableKey)

    const { error } = await stripe.redirectToCheckout({
      sessionId: response.sessionId,
    })

    if (error) {
      console.error(error)
    }
  }

  return (
    <article className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 md:gap-8 py-4 px-8 bg-gray-800 rounded-md overflow-hidden">
      {/* Cart total */}
      <p className="text-xl text-white ">
        Shipping: €{(shipping(cart) / 100).toFixed(2)}
      </p>
      <p className="text-xl text-white">
        Total: €{(cartTotal / 100).toFixed(2)}
      </p>
      {/* Checkout */}
      <div className="flex items-center">
        <Button text="Checkout" fullWidth={false} click={() => checkOut()} />

        {loader && (
          <BiLoaderCircle className="text-2xl text-white ml-4 animate-spin-slow" />
        )}
      </div>
    </article>
  )
}

export default Checkout
