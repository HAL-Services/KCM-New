export const hamburgerTopAnim = {
  hidden: {
    rotate: 0,
    y: 0,
  },
  show: {
    rotate: 45,
    y: 2,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

export const hamburgerMidAnim = {
  hidden: {
    opacity: 1,
    display: "block",
  },
  show: {
    opacity: 0,
    display: "none",
  },
};

export const hamburgerBotAnim = {
  hidden: {
    rotate: 0,
    y: 0,
  },
  show: {
    rotate: -45,
    y: -2,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

export const landingAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

export const titleAnim = {
  hidden: { y: 100 },
  show: {
    y: 0,
    transition: { type: "spring" },
  },
};
