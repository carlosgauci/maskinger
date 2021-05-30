import React from "react"
import { graphql } from "gatsby"
import InfoPage from "../components/InfoPage"
import Seo from "../components/Seo"
import PropTypes from "prop-types"

const ShippingPage = ({
  data: {
    allAirtable: { nodes },
  },
}) => {
  return (
    <>
      <Seo title="Shipping & Returns | Maskinger" />
      <InfoPage nodes={nodes} />
    </>
  )
}

export const query = graphql`
  query ShippingInfo {
    allAirtable(
      filter: { table: { eq: "Info" }, data: { cat: { eq: "shipping" } } }
      sort: { fields: data___order, order: ASC }
    ) {
      nodes {
        data {
          heading
          text
          order
        }
      }
    }
  }
`

ShippingPage.propTypes = {
  data: PropTypes.object,
}

export default ShippingPage
