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
    y: 100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      // when: "beforeChildren",
      // staggerChildren: 0.25,
    },
  },
};

export const titleAnim = {
  hidden: { y: 100 },
  show: { y: 0, transition: { duration: 1, ease: "easeOut" } },
};
