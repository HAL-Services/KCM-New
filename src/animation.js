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
      delay: 0.2,
      duration: 0.25,
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

export const contactAnim1 = {
  hidden: { x: 200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.1, duration: 0.3, delay: 0 },
  },
};

export const contactAnim2 = {
  hidden: { x: -200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.1, duration: 0.3, delay: 0 },
  },
};

export const navbarSideAnim = {
  hidden: {
    clipPath: `circle(0px at 40px 40px)`,
    transition: {
      duration: 0.8,
      delay: 0.4,
    },
  },
  show: {
    clipPath: `circle(1370px at 40px 40px)`,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    clipPath: `circle(0px at 40px 40px)`,
    transition: {
      duration: 0.8,
      delay: 0.4,
      staggerChildren: 0.1,
      delayChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

export const navbarSideTitleAnim = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "spring" },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { ease: "easeOut", type: "spring" },
  },
};
