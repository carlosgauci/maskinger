import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="py-4 border-t border-gray-200 ">
      <div className="container flex flex-col md:flex-row md:justify-between  justify-center  items-center">
        <nav>
          <ul className="flex gap-6 mb-1 ">
            <li>
              <Link
                to="/terms-of-service"
                className="font-heading font-semibold"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="font-heading font-semibold">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="font-heading font-semibold">
                Shipping
              </Link>
            </li>
          </ul>
        </nav>
        <p className="font-heading font-semibold">
          Copyright ©2021 maskinger.com
        </p>
        {/* <p>contact@maskinger.com</p> */}
      </div>
    </footer>
  )
}

export default Footer
