import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import Navigation from "./Navigation"
import { useSelector } from "react-redux"
import { AnimatePresence } from "framer-motion"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const Layout = ({ children }) => {
  const navOpen = useSelector(state => state.navOpen)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <AnimatePresence>{navOpen && <Navigation />}</AnimatePresence>
      <ToastContainer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
