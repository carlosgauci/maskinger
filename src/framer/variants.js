// Framer-motion variants

// Mobile nav container, slides in from right
export const navVariants = {
  initial: {
    x: "100%",
  },
  enter: {
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25 },
  },
}

// Buttons
export const buttonVariants = {
  hover: {
    backgroundColor: "#38bba9",
  },

  tap: {
    scale: 0.99,
  },
}

// Product Grid variants
export const productVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.025,
    transition: { type: "linear", duration: 0.25 },
    boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.05)",
  },
}
