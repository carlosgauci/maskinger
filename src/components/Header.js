import React from "react"
import { BiMenu, BiCartAlt } from "react-icons/bi"
import { Link } from "gatsby"
import { useSelector, useDispatch } from "react-redux"
import { toggleNav } from "../actions/CartActions"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  // Total items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="fixed w-full h-20 bg-white border-b border-gray-200 z-10">
      <div className="container h-full flex justify-between items-center">
        {/* Title */}
        <Link to="/">
          <h1 className="text-4xl">Maskinger</h1>
        </Link>

        {/* Nav & icons */}
        <nav className="flex gap-4 md:gap-8">
          {/* Shop link */}
          <AnchorLink to={`/#shop`}>
            <button className="hidden md:block font-normal">Shop</button>
          </AnchorLink>

          {/* Cart icon/link */}
          <Link to="/cart">
            <div className="relative">
              <BiCartAlt className="text-3xl" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-primary rounded-full w-4 h-4 flex items-center justify-center text-xxs text-white font-body  transform translate-x-1.5 -translate-y-1.5">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>

          {/* Mobile nav icon */}
          <BiMenu
            className="md:hidden text-3xl"
            onClick={() => dispatch(toggleNav())}
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
