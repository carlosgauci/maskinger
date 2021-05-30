import React from "react"
import { graphql } from "gatsby"
import InfoPage from "../components/InfoPage"
import Seo from "../components/Seo"
import PropTypes from "prop-types"

const TermsPage = ({
  data: {
    allAirtable: { nodes },
  },
}) => (
  <>
    <Seo title="Terms of Service | Maskinger" index="noindex" />
    <InfoPage nodes={nodes} />
  </>
)

export const query = graphql`
  query Terms {
    allAirtable(
      filter: { table: { eq: "Info" }, data: { cat: { eq: "terms" } } }
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

TermsPage.propTypes = {
  data: PropTypes.object,
}

export default TermsPage
