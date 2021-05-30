import React from "react"
import { graphql } from "gatsby"
import InfoPage from "../components/InfoPage"
import Seo from "../components/Seo"
import PropTypes from "prop-types"

const PrivacyPage = ({
  data: {
    allAirtable: { nodes },
  },
}) => (
  <>
    <Seo title="Privacy Policy | Maskinger" index="noindex" />
    <InfoPage nodes={nodes} />
  </>
)

export const query = graphql`
  query Privacy {
    allAirtable(
      filter: { table: { eq: "Info" }, data: { cat: { eq: "privacy" } } }
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

PrivacyPage.propTypes = {
  data: PropTypes.object,
}

export default PrivacyPage
