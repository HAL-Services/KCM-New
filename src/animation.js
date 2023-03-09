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
    y: 300,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.75, ease: "easeOut" } },
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

export const rightAnim = {
  hidden: { scale: 0.8, opacity: 0, transition: { duration: 0.75 } },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: "easeOut",
      type: "spring",
    },
  },
};
export const listMotion = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.5 }
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
}

export const landingTitleAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { delay: 3.5, duration: 1 },
  }
}
