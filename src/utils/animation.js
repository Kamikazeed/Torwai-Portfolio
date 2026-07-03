
export const animateContainer = [
  {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  },
  {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  },
  {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  },
]

export const animation = [
  {
    hidden: {opacity: 0, y: -20},
    show: {opacity: 1, y: 0, transition: {duration: 0.5}}
  },
  {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0, transition: {duration: 0.75}}
  },
  {
    hidden: {opacity: 0, scale: 0.75},
    show: {opacity: 1, scale: 1, transition: {type: 'spring', stiffness: 100, damping: 10, duration: 0.5}}
  },
]