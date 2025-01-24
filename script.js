gsap.to("#mod2 img", {
  scrollTrigger: {
    trigger: "#mod2",
    start: "bottom 75%",
    end: "bottom 0%",
    toggleActions: "play none none reset",
    onEnter: () => {
      gsap.to("#mod2 img", {
        filter: "blur(8px)",
      });
    },
    onLeave: () => {
      gsap.to("#mod2 img", {
        filter: "blur(0px)",
      });
    },
  },
});

