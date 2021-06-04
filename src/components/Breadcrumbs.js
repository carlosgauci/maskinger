import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { BsChevronRight } from "react-icons/bs"
import PropTypes from "prop-types"

const Breadcrumbs = ({ name }) => {
  return (
    <section className="container flex items-center gap-2 md:gap-4 py-4">
      <AnchorLink className="underline" to={`/#shop`}>
        Shop
      </AnchorLink>
      <BsChevronRight className="text-xs" />
      <p className="truncate">{name}</p>
    </section>
  )
}

Breadcrumbs.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Breadcrumbs
