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
