import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <section className="bg-hero">
      <div className="container min-h-screen pt-28 pb-8 flex flex-col justify-center">
        {/* Title section */}
        <section className="flex flex-col items-center">
          <p className="font-semibold mb-6 md:mb-16">
            WHERE DESIGN MEETS QUALITY
          </p>
          <h2 className="font-heading text-6xl md:text-8xl">Maskinger</h2>
        </section>

        {/* Images & Shop Now button */}
        <section className="grid grid-cols-1 md:grid-cols-3 place-items-center">
          <StaticImage
            src="../images/hero-mask-1.png"
            alt="Face Mask"
            placeholder="blurred"
            layout="fullWidth"
            quality={80}
            className="w-4/5 md:w-full h-full"
          />

          <div className="flex flex-col items-center justify-center">
            <p className="mb-4 md:font-semibold">FIND YOUR FACE MASK</p>
            <button className="bg-primary text-white py-3 w-60">
              SHOP NOW
            </button>
          </div>

          <StaticImage
            src="../images/hero-mask-2.png"
            alt="Face Mask"
            placeholder="blurred"
            layout="fullWidth"
            quality={80}
            className="hidden md:block w-full h-full"
          />
        </section>
      </div>
    </section>
  )
}

export default Hero
