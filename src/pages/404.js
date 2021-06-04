import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <>
    <Seo title="404 Not Found" index="noindex" />

    <div className="container py-28 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl mb-6 font-heading">404: Not Found</h2>
      <p className="mb-6">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Link to="/">
        <Button text="GO BACK" fullWidth={false} />
      </Link>
    </div>
  </>
)

export default NotFoundPage
