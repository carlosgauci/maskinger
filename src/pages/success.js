import React, { useEffect } from "react"
import Button from "../components/Button"
import Seo from "../components/Seo"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useDispatch } from "react-redux"
import { emptyCart } from "../actions/CartActions"

const SuccessPage = () => {
  const dispatch = useDispatch()

  // Empty the cart on checkout success
  useEffect(() => {
    dispatch(emptyCart())
  }, [dispatch])
  return (
    <>
      <Seo title="Order Successful" index="noindex" />

      <div className="container py-28 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl mb-6 font-heading">Thank You!</h2>
        <p className="mb-2">
          We have received your order and will start processing it soon.
        </p>
        <p className="mb-6">
          You will receive an email update once your order has been sent for
          delivery.
        </p>
        <AnchorLink to={`/#shop`}>
          <Button text="BACK TO SHOP" fullWidth={false} />
        </AnchorLink>
      </div>
    </>
  )
}

export default SuccessPage
