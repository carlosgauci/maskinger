import React from "react"
import { BiMenu, BiCartAlt } from "react-icons/bi"

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-200">
      <div className="container flex justify-between items-center">
        {/* Title */}
        <h1 className="text-4xl">Maskinger</h1>

        {/* Nav & icons */}
        <nav className="flex gap-4 md:gap-8">
          <button className="hidden md:block font-normal">Shop</button>
          <BiCartAlt className="text-3xl" />
          <BiMenu className="md:hidden text-3xl" />
        </nav>
      </div>
    </header>
  )
}

export default Header
