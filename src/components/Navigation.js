import React from "react"
import { motion } from "framer-motion"
import { navVariants } from "../framer/variants"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"
import { toggleNav } from "../actions/CartActions"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Navigation() {
  const dispatch = useDispatch()
  return (
    <motion.nav
      className="fixed z-10 top-20 right-0 left-0 bottom-0 bg-white pt-14 pb-10 px-4 flex flex-col items-center  gap-4 md:hidden"
      variants={navVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <h3 className="font-heading text-3xl font-normal mb-4">Navigation</h3>

      <AnchorLink to={`/#shop`} onAnchorLinkClick={() => dispatch(toggleNav())}>
        <button className="text-2xl font-normal">Shop</button>
      </AnchorLink>
      <Link to="/cart" onClick={() => dispatch(toggleNav())}>
        <button className="text-2xl font-normal">Cart</button>
      </Link>
    </motion.nav>
  )
}
